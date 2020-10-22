import { Lobby } from '../interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

let lobbies: Lobby[] = [];

@Injectable()
export class LobbyService {
    create (lobbyName: string, message: Message) {
        const lobbyAlreadyExists = lobbies.find(lobby => lobby.name === lobbyName)
        
        if (lobbyAlreadyExists) {
            message.channel.send(`A lobby **${lobbyName}** já existe!\nDigite **!join ${lobbyName}** para entrar.`)
        } else {
            console.log('Essa lobby não existe ainda, vamos criar.')
            const newLobby = {
                name: lobbyName,
                count: 0
            }

            lobbies.push(newLobby)
            message.channel.send(`Lobby **${lobbyName}** criada com sucesso! Digite **!join ${lobbyName}** para entrar.`)
        }
    }

    join (lobbyName: string, message: Message) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)

        if (!lobby) {
            message.channel.send(`A lobby **${lobbyName}** não existe! Digite **!create ${lobbyName}** para criar.`)
            return
        }

        if (lobby.count === 10) {
            message.channel.send(`Que pena, essa lobby já está cheia. :(`)
        } else {
            if (lobby.count === 0) {
                lobby.players = []
                lobby.count++
                lobby.players.push({ name: message.member.displayName, level: Number(message.member.roles.highest.name)})
            } else {
                lobby.count++
                lobby.players.push({ name: message.member.displayName, level: Number(message.member.roles.highest.name)})
            }
        }
    }

    list (lobbyName: string, message: Message) {
        const lobby = lobbies.find(lobby => lobby.name === lobbyName)
        message.channel.send(`Lobby: ${lobbyName} - ${lobby.count} jogadores\n`)
        lobby.players.map(player => {
            message.channel.send(`${player.name} (${player.level})`)
        })
    }
}