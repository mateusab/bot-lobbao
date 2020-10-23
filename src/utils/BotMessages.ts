export const BotMessages = Object.freeze({
    listLobby: (lobbyName: string, spots: number) => `Lobby: ${lobbyName} (${spots} vagas)`,
    lobbyAlreadyExists: (lobbyName: string) => `A lobby **${lobbyName}** já existe!\nDigite **!join ${lobbyName}** para entrar.`,
    lobbyCreated: (lobbyName: string) => `Lobby **${lobbyName}** criada com sucesso! Digite **!join ${lobbyName}** para entrar.`,
    lobbyDoesNotExists: (lobbyName: string) => `A lobby **${lobbyName}** não existe! Digite **!create ${lobbyName}** para criar.`,
    lobbyFull: 'Que pena, essa lobby já está cheia. :(',
    playerIsNotPartOfLobby: (lobbyName: string, playerName: string) => `${playerName} não faz parte da lobby **${lobbyName}**.`,
    playerLeftLobby: (lobbyName: string, playerName: string) => `${playerName} saiu da lobby **${lobbyName}**.`
})