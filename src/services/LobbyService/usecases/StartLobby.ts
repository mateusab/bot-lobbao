import { BotMessages } from '@utils/BotMessages';
import { Player } from '@interfaces/PlayerInterface';
import { Team } from '@interfaces/TeamInterface';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class StartLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        if (lobbyName === '') {
            message.channel.send(BotMessages.startLobbyDefaultMessage)
            return
        }

        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        
        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            //createMockLobby(lobby);
            const numberOfPlayers = lobby.count
            const numberOfTeams = Math.floor(numberOfPlayers / 5)
            const playersToBeRemoved = numberOfPlayers % 5
    
            if (numberOfTeams < 1) {
                message.channel.send(BotMessages.mustHaveAtLeastFivePlayersToStartLobby(lobbyName, lobby.count))
            } else {
                const sortedLobby = lobby.players.sort((a, b) => b.level - a.level);
                logLobbyStart(numberOfTeams, numberOfPlayers, playersToBeRemoved);
                
                if (playersToBeRemoved > 0) {
                    removePlayersFromLobby(playersToBeRemoved, numberOfPlayers, message, sortedLobby, lobby);
                }
        
                let teams: Team[] = []
                createTeams(numberOfTeams, sortedLobby, teams);
                listTeams(teams, message);
                
                let tempTeams: Team[] = teams

                if (numberOfTeams > 2) {
                    message.channel.send(`Sugestão de confrontos :gc:`)
                    tempTeams = tempTeams.sort((a, b) => a.levelAverage - b.levelAverage)
                    if (numberOfTeams % 2 === 0) {
                        for (var i = 0; i < (numberOfTeams/2); i++) {
                            const teamA = tempTeams[0]
                            const teamB = tempTeams[1]
                            tempTeams.splice(0, 1)
                            tempTeams.splice(0, 1)
                            message.channel.send(`**${teamA.name}** (**${teamA.players[0].name}**) :vs: **${teamB.name}** (**${teamB.players[0].name}**)`)
                        }
                    } else {
                        for (var i = 0; i < (Math.floor(numberOfTeams/2)); i++) {
                            const teamA = tempTeams[0]
                            const teamB = tempTeams[1]
                            tempTeams.splice(0, 1)
                            tempTeams.splice(0, 1)
                            message.channel.send(`**${teamA.name}** (**${teamA.players[0].name}**) :vs: **${teamB.name}** (**${teamB.players[0].name}**)`)
                        }
                        message.channel.send(`**${tempTeams[0].name}** (**${tempTeams[0].players[0].name}**) sobrou!`)     
                    }
                }
            }
        }
    }
}

function listTeams(teams: Team[], message: Message) {
    teams = teams.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);

    teams.forEach(team => {
        team.players.sort((a, b) => b.level - a.level)
        message.channel.send(BotMessages.listTeam(team.name, team.levelAverage));
        const teamPlayers: String[] = getTeamPlayers(team.players);
        message.channel.send(teamPlayers);
    });
}

function logLobbyStart(numberOfTeams: number, numberOfPlayers: number, playersToBeRemoved: number) {
    console.log('Número de times: ', numberOfTeams);
    console.log('Número de players: ', numberOfPlayers);
    console.log('Players a serem removidos: ', playersToBeRemoved);
}

function getTeamPlayers(players: Player[]) {
    return players.map(player => {
        return `${player.name} (${player.level})`;
    });
}

function createTeams(numberOfTeams: number, sortedLobby: Player[], teams: Team[]) {
    initializeTeams(numberOfTeams, teams);

    let temp = sortedLobby
    console.log('lobby antes:', temp)
    //distribui os cabeças
    for (var i = 0; i < numberOfTeams; i++) {
        teams[i].players.push({ name: temp[0].name, level: temp[0].level})
        teams[i].levelAverage = temp[i].level
        temp.splice(0, 1)
    }

    // ordena do lvl mais baixo para o mais alto
    temp = temp.sort((a, b) => a.level - b.level);

    // antes de distribuir nos times, ordena os times do mais alto pro mais baixo
    // visto que os times de cima receberão os jogadores de level mais baixo

    for (var j = 0; j < 4; j++) {
        teams = teams.sort((a, b) => b.levelAverage - a.levelAverage);

        for(var i = 0; i < numberOfTeams; i++) {
            teams[i].players.push({ name: temp[0].name, level: temp[0].level})
            teams[i].levelAverage += temp[0].level
            temp.splice(0, 1)
        }
    }

    // recalcula a média de cada time
    for (var i = 0; i < teams.length; i++) {
        const teamTotalLevel = teams[i].players.reduce((acc, cur) => {
            return acc + cur.level 
        }, 0)

        teams[i].levelAverage = teamTotalLevel / 5
    }
}

function initializeTeams(numberOfTeams: number, teams: Team[]) {
    for (var i = 0; i < numberOfTeams; i++) {
        const players: Player[] = [];
        const team: Team = { players, name: `Time ${i + 1}`, levelAverage: 0 };
        teams.push(team);
    }
}

function removePlayersFromLobby(playersToBeRemoved: number, numberOfPlayers: number, message: Message, sortedLobby: Player[], lobby: Lobby) {
    for (var i = 0; i <= playersToBeRemoved - 1; i++) {
        const randomIndex = faker.random.number({ 'min': 0, 'max': numberOfPlayers - 1 });
        message.channel.send(`${sortedLobby[randomIndex].name} foi removido da lobby`);
        sortedLobby.splice(randomIndex, 1);
        lobby.count -= 1;
    }
}

function createMockLobby(lobby: Lobby) {
    lobby.players = []
    lobby.count = 6
    lobby.players.push({ name: 'miley', level: 8 });
    lobby.players.push({ name: 'BigJhoW', level: 7 });
    lobby.players.push({ name: 'coeLho', level: 0 });
    lobby.players.push({ name: 'pejota', level: 7 });
    lobby.players.push({ name: 'xips', level: 20 });
    lobby.players.push({ name: 'Mateusser', level: 5 });
//    lobby.players.push({ name: 'barreto', level: 12 });
//    lobby.players.push({ name: 'viol', level: 20 });
//    lobby.players.push({ name: 'Rubão', level: 2 });
//    lobby.players.push({ name: 'sAvilek', level: 8 });
//    lobby.players.push({ name: 'Xilanta', level: 8 });
//    lobby.players.push({ name: 'kin', level: 12 });
//    lobby.players.push({ name: 'mlopes', level: 3 });
//    lobby.players.push({ name: 'VyK7oR', level: 12 });
//    lobby.players.push({ name: 'stots', level: 10 });
//    lobby.players.push({ name: 'lzwan', level: 4 });
//    lobby.players.push({ name: 'Matob', level: 14 });
//    lobby.players.push({ name: 'Alê', level: 5 });
//    lobby.players.push({ name: 'kiq', level: 15 });
//    lobby.players.push({ name: 'mestre', level: 7 });
//    lobby.players.push({ name: 'muan', level: 15 });
//    lobby.players.push({ name: 'Godinez', level: 8 });
//    lobby.players.push({ name: 'Cisco', level: 12 });
//    lobby.players.push({ name: 'joX', level: 16 });
//    lobby.players.push({ name: 'Juzi', level: 20 });
//    lobby.players.push({ name: 'Eihara', level: 20 });
}
