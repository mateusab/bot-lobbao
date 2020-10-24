import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class JoinLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        const playerName = message.member.displayName

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
            return
        }

        if (lobby.count === 0) {
            lobby.players = []
            lobby.count++
            lobby.players.push({ name: playerName, level: Number(message.member.roles.highest.name)})
            message.channel.send(BotMessages.firstPlayerJoinnedLobby(lobbyName, playerName))
        } else {
            const alreadyInLobby = this.playerAlreadyInLobby(lobby, playerName)

            if (alreadyInLobby) {
                message.channel.send(BotMessages.playerAlreadyInLobby(lobbyName, playerName))
            } else {
                lobby.count++
                lobby.players.push({ name: message.member.displayName, level: Number(message.member.roles.highest.name)})
                message.channel.send(BotMessages.playerJoinnedLobby(lobbyName, playerName, lobby.count))
            }
        }
    }

    playerAlreadyInLobby(lobby: Lobby, playerName: string) {
        return lobby.players.some(player => player.name === playerName)
    }
}