import { CSGO_ROLE_MAIN_NAME } from '@config/constants';
import { LevelEnum } from '@level/LevelEnum'
import { PersonalizedMessages } from 'src/usecases/PersonalizedMessages';
import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

const personalizedMessages = new PersonalizedMessages()

@Injectable()
export class JoinLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const playerId = message.author.id
        if (lobbyName === '') {
            message.channel.send(BotMessages.joinLobbyDefaultMessage(playerId))
            return
        }

        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        const playerName = message.member.displayName
        const levelRole = findLevelRole(message)

        if (!levelRole) {
            message.channel.send(BotMessages.onlyPlayersWithLevelCanJoinLobbies(playerId))
            return
        }

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
            return
        }

        const playerLevel = LevelEnum[levelRole.name]

        if (lobby.count === 0) {
            lobby.players = []
            lobby.count++
            lobby.players.push({ name: playerName, level: playerLevel})
            message.channel.send(BotMessages.firstPlayerJoinnedLobby(lobbyName, playerId))
            personalizedMessages.execute(message)
        } else {
            const alreadyInLobby = this.playerAlreadyInLobby(lobby, playerName)

            if (alreadyInLobby) {
                message.channel.send(BotMessages.playerAlreadyInLobby(lobbyName, playerId))
            } else {
                lobby.count++
                lobby.players.push({ name: message.member.displayName, level: playerLevel})
                message.channel.send(BotMessages.playerJoinnedLobby(lobbyName, playerId, lobby.count))
                personalizedMessages.execute(message)
            }
        }
    }

    playerAlreadyInLobby(lobby: Lobby, playerName: string) {
        return lobby.players.some(player => player.name === playerName)
    }
}

function findLevelRole(message: Message) {
    return message.member.roles.cache.find(role => role.name.includes(CSGO_ROLE_MAIN_NAME))
}