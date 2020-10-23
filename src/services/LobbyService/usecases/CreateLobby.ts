import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateLobby {
    execute (lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobbyAlreadyExists = lobbies.find(lobby => lobby.name === lobbyName)
        
        if (lobbyAlreadyExists) {
            message.channel.send(BotMessages.lobbyAlreadyExists(lobbyName))
        } else {
            const newLobby = {
                name: lobbyName,
                count: 0
            }

            lobbies.push(newLobby)
            message.channel.send(BotMessages.lobbyCreated(lobbyName))
        }
    }
}