import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class ListLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            message.channel.send(BotMessages.listLobby(lobbyName))
            
            const playersAtLobby: String[] = getLobbyPlayers(lobby)
            message.channel.send(playersAtLobby)
        }
    }
}

function getLobbyPlayers(lobby: Lobby): String[] {
    return lobby.players.map(player => {
        return `${player.name} (${player.level})\n`;
    });
}
