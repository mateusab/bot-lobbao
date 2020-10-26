import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClearLobby {
    execute (lobbyName: string, message: Message, lobbies: Lobby[]) {
        const playerId = message.author.id
        if (lobbyName === '') {
            message.channel.send(BotMessages.clearLobbyDefaultMessage(playerId))
            return
        }

        const lobby = lobbies.find(lobby => lobby.name === lobbyName)

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            lobby.count = 0
            lobby.players = []
            message.channel.send(BotMessages.lobbyCleaned(lobbyName))
        }
    }
}