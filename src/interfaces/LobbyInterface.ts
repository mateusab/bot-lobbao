export interface Lobby {
    name: string
    players?: Players[]
    count: number
}

interface Players {
    name: string,
    level: number
}