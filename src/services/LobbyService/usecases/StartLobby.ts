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
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            createMockLobby(lobby);
            const sortedLobby = lobby.players.sort((a, b) => b.level - a.level);
            const numberOfPlayers = lobby.count
            const numberOfTeams = Math.floor(numberOfPlayers / 5)
            const playersToBeRemoved = numberOfPlayers % 5
    
            if (numberOfTeams < 1) {
                message.channel.send(BotMessages.mustHaveAtLeastFivePlayersToStartLobby(lobbyName, lobby.count))
            } else {
                logLobbyStart(numberOfTeams, numberOfPlayers, playersToBeRemoved);
                
                if (playersToBeRemoved > 0) {
                    removePlayersFromLobby(playersToBeRemoved, numberOfPlayers, message, sortedLobby, lobby);
                }
        
                let teams: Team[] = []
                createTeams(numberOfTeams, sortedLobby, teams);
                listTeams(teams, message);
            }
        }
    }
}

function listTeams(teams: Team[], message: Message) {
    teams.forEach(team => {
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
    for (var i = 0; i <= numberOfTeams - 1; i++) {
        const players: Player[] = [{ name: '', level: 0 }, { name: '', level: 0 }, { name: '', level: 0 }, { name: '', level: 0 }, { name: '', level: 0 }];
        const team: Team = { players, name: `Time ${i+1}`, levelAverage: 0 };
        let levelsCount = 0
        for (var j = 0; j < 5; j++) {
            team.players[j] = {
                name: sortedLobby[i + (j * numberOfTeams)].name,
                level: sortedLobby[i + (j * numberOfTeams)].level
            };
            levelsCount += team.players[j].level
        }
        team.levelAverage = levelsCount / 5
        teams.push(team);
    }
}

function removePlayersFromLobby(playersToBeRemoved: number, numberOfPlayers: number, message: Message, sortedLobby: import("/home/mateus/bot-lobbao/src/interfaces/PlayerInterface").Player[], lobby: Lobby) {
    for (var i = 0; i <= playersToBeRemoved - 1; i++) {
        const randomIndex = faker.random.number({ 'min': 0, 'max': numberOfPlayers - 1 });
        message.channel.send(`${sortedLobby[randomIndex].name} foi removido da lobby`);
        sortedLobby.splice(randomIndex, 1);
        lobby.count -= 1;
    }
}

function createMockLobby(lobby: Lobby) {
    lobby.players = []
    lobby.count = 10
    lobby.players.push({ name: 'xips', level: 20 });
    lobby.players.push({ name: 'viol', level: 20 });
    lobby.players.push({ name: 'miley', level: 8 });
    lobby.players.push({ name: 'BigJhoW', level: 7 });
//    lobby.players.push({ name: 'coeLho', level: 0 });
    lobby.players.push({ name: 'pejota', level: 7 });
    lobby.players.push({ name: 'Mateusser', level: 5 });
    lobby.players.push({ name: 'barreto', level: 12 });
//    lobby.players.push({ name: 'Rubão', level: 2 });
    lobby.players.push({ name: 'sAvilek', level: 8 });
    lobby.players.push({ name: 'Xilanta', level: 8 });
    lobby.players.push({ name: 'kin', level: 12 });
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
}
