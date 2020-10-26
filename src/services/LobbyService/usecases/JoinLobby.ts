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
        const haveLevel = playerCanPlay(message)

        if (!haveLevel) {
            message.channel.send(BotMessages.onlyPlayersWithLevelCanJoinLobbies(playerId))
            return
        }

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
            return
        }

        if (lobby.count === 0) {
            lobby.players = []
            lobby.count++
            lobby.players.push({ name: playerName, level: Number(message.member.roles.highest.name)})
            message.channel.send(BotMessages.firstPlayerJoinnedLobby(lobbyName, playerId))
            personalizedMessages.execute(message)
        } else {
            const alreadyInLobby = this.playerAlreadyInLobby(lobby, playerName)

            if (alreadyInLobby) {
                message.channel.send(BotMessages.playerAlreadyInLobby(lobbyName, playerId))
            } else {
                lobby.count++
                lobby.players.push({ name: message.member.displayName, level: Number(message.member.roles.highest.name)})
                message.channel.send(BotMessages.playerJoinnedLobby(lobbyName, playerId, lobby.count))
                personalizedMessages.execute(message)
            }
        }
    }

    playerAlreadyInLobby(lobby: Lobby, playerName: string) {
        return lobby.players.some(player => player.name === playerName)
    }
}

function playerCanPlay(message: Message) {
    const levels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    let booleans = []
    message.member.roles.cache.forEach(role => {
        const roleIsLevel = levels.includes(role.name)
        booleans.push(roleIsLevel)
    })

    return booleans.some(boolean => boolean === true)
}