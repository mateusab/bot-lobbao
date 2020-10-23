import { Team } from '@interfaces/TeamInterface';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class StartLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        createMockLobby(lobby);
        const sortedLobby = lobby.players.sort((a, b) => b.level - a.level);
        
        const numberOfPlayers = lobby.count
        const numberOfTeams = Math.floor(numberOfPlayers / 5)
        const playersToBeRemoved = numberOfPlayers % 5
        console.log('numero de times: ', numberOfTeams)
        
        if (playersToBeRemoved > 0) {
            removePlayersFromLobby(playersToBeRemoved, numberOfPlayers, message, sortedLobby, lobby);
        }

        let teams: Team[] = []

        for(var i = 0; i <= numberOfTeams-1; i++) {
            teams[i].players = []
            for (var j = 0; j <= numberOfTeams; j++) {
                teams[i].players[j] = {
                    name: sortedLobby[i+(j*numberOfTeams)].name,
                    level: sortedLobby[i+(j*numberOfTeams)].level
                }
            }
        }

        console.log(teams)
    }
}

function removePlayersFromLobby(playersToBeRemoved: number, numberOfPlayers: number, message: Message, sortedLobby: import("/home/mateus/bot-lobbao/src/interfaces/PlayerInterface").Player[], lobby: Lobby) {
    console.log('jogadores a serem removidos: ', playersToBeRemoved);
    for (var i = 0; i <= playersToBeRemoved - 1; i++) {
        const randomIndex = faker.random.number({ 'min': 0, 'max': numberOfPlayers - 1 });
        message.channel.send(`${sortedLobby[randomIndex].name} foi removido da lobby`);
        sortedLobby.splice(randomIndex, 1);
        lobby.count -= 1;
    }
}

function createMockLobby(lobby: Lobby) {
    lobby.players = []
    lobby.count = 22
    lobby.players.push({ name: 'xips', level: 20 });
    lobby.players.push({ name: 'viol', level: 20 });
    lobby.players.push({ name: 'miley', level: 8 });
    lobby.players.push({ name: 'BigJhoW', level: 7 });
    lobby.players.push({ name: 'coeLho', level: 0 });
    lobby.players.push({ name: 'pejota', level: 7 });
    lobby.players.push({ name: 'Mateusser', level: 5 });
    lobby.players.push({ name: 'barreto', level: 12 });
    lobby.players.push({ name: 'Rubão', level: 13 });
    lobby.players.push({ name: 'sAvilek', level: 8 });
    lobby.players.push({ name: 'Xilanta', level: 8 });
    lobby.players.push({ name: 'kin', level: 12 });
    lobby.players.push({ name: 'mlopes', level: 3 });
    lobby.players.push({ name: 'VyK7oR', level: 12 });
    lobby.players.push({ name: 'stots', level: 10 });
    lobby.players.push({ name: 'lzwan', level: 4 });
    lobby.players.push({ name: 'Matob', level: 14 });
    lobby.players.push({ name: 'Alê', level: 5 });
    lobby.players.push({ name: 'kiq', level: 15 });
    lobby.players.push({ name: 'mestre', level: 7 });
    lobby.players.push({ name: 'muan', level: 15 });
    lobby.players.push({ name: 'Godinez', level: 8 });
}
