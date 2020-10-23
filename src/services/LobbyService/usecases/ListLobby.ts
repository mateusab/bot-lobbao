import { Lobby } from './../../../interfaces/LobbyInterface';
import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class ListLobby {
    execute(lobbyName: string, message: Message, lobbies: Lobby[]) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        message.channel.send(`Lobby: ${lobbyName} - jogadores\n`)
        lobby.players.map(player => {
            message.channel.send(`${player.name} (${player.level})`)
        })
    }
}