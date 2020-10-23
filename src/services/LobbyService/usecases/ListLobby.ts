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
            const spots = 10 - lobby.count 
            message.channel.send(BotMessages.listLobby(lobbyName, spots))
            
            if(spots != 10) {
                lobby.players.forEach(player => {
                    message.channel.send(`${player.name} (${player.level})`)
                })
            }
        }


    }
}