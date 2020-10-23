import { Player } from "@interfaces/PlayerInterface";

export interface Lobby {
    name: string
    players?: Player[]
    count: number
}