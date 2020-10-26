import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class LeaveLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const playerId = message.author.id
        if (lobbyName === '') {
            message.channel.send(BotMessages.leaveLobbyDefaultMessage(playerId))
            return
        }

        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        
        
        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            const playerName = message.member.displayName
            const playerIndex = lobby.players.findIndex(player => player.name === playerName)

            if (playerIndex === -1) {
                message.channel.send(BotMessages.playerIsNotPartOfLobby(lobbyName, playerName))
            } else {
                lobby.players.splice(playerIndex, 1)
                lobby.count -= 1

                message.channel.send(BotMessages.playerLeftLobby(lobbyName, playerName))
            }
        }
    }
}