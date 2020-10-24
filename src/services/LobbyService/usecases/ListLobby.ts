import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class ListLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        if (lobbyName === '') {
            if (lobbies.length > 0) {
                const lobbiesOpen: String[] = getOpenLobbies(lobbies)
                message.channel.send(BotMessages.openedLobbies)
                message.channel.send(lobbiesOpen)
                message.channel.send(BotMessages.typeListToSeeSpecificLobby)
            } else {
                message.channel.send(BotMessages.noLobbiesOpened)
            }
        } else {
            const lobby = lobbies.find(lobby => lobby.name === lobbyName)
    
            if (!lobby) {
                message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
            } else {
                if(lobby.count === 0) {
                    message.channel.send(BotMessages.lobbyEmpty(lobbyName))
                } else {                
                    message.channel.send(BotMessages.listLobby(lobbyName, lobby.count))
                    const playersAtLobby: String[] = getLobbyPlayers(lobby)
                    message.channel.send(playersAtLobby)
                }
            }
        }
    }
}
function getOpenLobbies(lobbies: Lobby[]): String[] {
    return lobbies.map(lobby => {
        return `**${lobby.name}** - ${lobby.count} jogadores`;
    });
}

function getLobbyPlayers(lobby: Lobby): String[] {
    return lobby.players.map(player => {
        return `${player.name} (${player.level})`;
    });
}
