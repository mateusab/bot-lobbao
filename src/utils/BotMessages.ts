export const BotMessages = Object.freeze({
    firstPlayerJoinnedLobby: (lobbyName: string, playerName: string) => `**${playerName}** foi o primeiro a entrar na lobby **${lobbyName}**.`,
    listLobby: (lobbyName: string, playersCount: number) => `Lobby: **${lobbyName}** - ${playersCount} jogadores`,
    listTeam: (name: string, levelAvg: number) => `**${name}** - Média: ${levelAvg}`,
    lobbyAlreadyExists: (lobbyName: string) => `A lobby **${lobbyName}** já existe!\nDigite **!join ${lobbyName}** para entrar.`,
    lobbyCleaned: (lobbyName: string) => `**${lobbyName}** liberada com sucesso. Obs: ela continua criada.`,
    lobbyCreated: (lobbyName: string) => `Lobby **${lobbyName}** criada com sucesso! Digite **!join ${lobbyName}** para entrar.`,
    lobbyDoesNotExists: (lobbyName: string) => `A lobby **${lobbyName}** não existe! Digite **!create ${lobbyName}** para criar.`,
    lobbyEmpty: (lobbyName: string) => `A lobby **${lobbyName}** está vazia.`,
    mustHaveAtLeastFivePlayersToStartLobby: (lobbyName: string, playersCount: number) => (`O número de jogadores mínimo para começar uma lobby é 5. A lobby **${lobbyName}** tem ${playersCount}`),
    playerAlreadyInLobby: (lobbyName: string, playerName: string) => `**${playerName}** já está na lobby **${lobbyName}**.`,
    playerIsNotPartOfLobby: (lobbyName: string, playerName: string) => `${playerName} não faz parte da lobby **${lobbyName}**.`,
    playerJoinnedLobby: (lobbyName: string, playerName: string, playersCount: number) => `**${playerName}** entrou na lobby **${lobbyName}** (${playersCount} jogadores).`,
    playerLeftLobby: (lobbyName: string, playerName: string) => `${playerName} saiu da lobby **${lobbyName}**.`
})