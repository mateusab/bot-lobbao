import { ClearLobby } from '@lobby/usecases/ClearLobby';
import { StartLobby } from '@lobby/usecases/StartLobby';
import { LeaveLobby } from '@lobby/usecases/LeaveLobby';
import { ListLobby } from '@lobby/usecases/ListLobby';
import { JoinLobby } from '@lobby/usecases/JoinLobby';
import { CreateLobby } from '@lobby/usecases/CreateLobby';
import { Lobby } from '@interfaces/LobbyInterface';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

let lobbies: Lobby[] = [];

const createLobby = new CreateLobby()
const joinLobby = new JoinLobby()
const leaveLobby = new LeaveLobby()
const listLobby = new ListLobby()
const startLobby = new StartLobby()
const clearLobby = new ClearLobby()

@Injectable()
export class LobbyService {
    create (lobbyName: string, message: Message) {
        createLobby.execute(lobbyName, message, lobbies)
    }

    join (lobbyName: string, message: Message) {
        joinLobby.execute(lobbyName, message, lobbies)
    }

    leave (lobbyName: string, message: Message) {
        leaveLobby.execute(lobbyName, message, lobbies)
    }

    list (lobbyName: string, message: Message) {
        listLobby.execute(lobbyName, message, lobbies)
    }

    start(lobbyName: string, message: Message) {
        startLobby.execute(lobbyName, message, lobbies)
    }

    clear(lobbyName: string, message: Message) {
        clearLobby.execute(lobbyName, message, lobbies)
    }
}