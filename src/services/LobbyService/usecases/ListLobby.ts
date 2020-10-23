import { BotMessages } from '@utils/BotMessages';
import { Lobby } from '@interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';
import { MAX_LOBBY_PLAYERS } from '@config/constants'

@Injectable()
export class ListLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)

        if (!lobby) {
            message.channel.send(BotMessages.lobbyDoesNotExists(lobbyName))
        } else {
            message.channel.send(BotMessages.listLobby(lobbyName))
            
            lobby.players.forEach(player => {
                message.channel.send(`${player.name} (${player.level})`)
            })
        }


    }
}