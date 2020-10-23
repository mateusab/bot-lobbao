import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class JoinLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
            return
        }

        if (lobby.count === 10) {
            message.channel.send(BotMessages.lobbyFull)
        } else {
            if (lobby.count === 0) {
                lobby.players = []
                lobby.count++
                lobby.players.push({ name: message.member.displayName, level: Number(message.member.roles.highest.name)})
                message.channel.send(`**${message.member.displayName}** entrou na **${lobbyName}**.`)
            } else {
                const alreadyInLobby = this.playerAlreadyInLobby(lobby, message.member.displayName)

                if (alreadyInLobby) {
                    message.channel.send(`**${message.member.displayName}** já está na lobby **${lobbyName}**.`)
                } else {
                    lobby.count++
                    lobby.players.push({ name: message.member.displayName, level: Number(message.member.roles.highest.name)})
                    message.channel.send(`**${message.member.displayName}** entrou na **${lobbyName}**.`)
                }
            }
        }
    }

    playerAlreadyInLobby(lobby: Lobby, playerName: string) {
        return lobby.players.some(player => player.name === playerName)
    }
}