import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteLobby {
    execute (lobbyName: string, message: Message, lobbies: Lobby[]) {
        if (lobbyName === '') {
            message.channel.send(BotMessages.deleteLobbyDefaultMessage)
            return
        }

        const lobbyIndex = lobbies.findIndex(lobby => lobby.name === lobbyName)

        if (lobbyIndex === -1) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            lobbies.splice(lobbyIndex, 1)
            message.channel.send(BotMessages.lobbyDeleted(lobbyName))
        }
    }
}