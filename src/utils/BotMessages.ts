export const BotMessages = Object.freeze({
    firstPlayerJoinnedLobby: (lobbyName: string, playerName: string) => `:white_check_mark: **${playerName}** foi o primeiro a entrar na lobby **${lobbyName}**.`,
    listLobby: (lobbyName: string, playersCount: number) => `Lobby: **${lobbyName}** - ${playersCount} jogadores`,
    listTeam: (name: string, levelAvg: number) => `**${name}** - Média: ${levelAvg} :zap:`,
    lobbyAlreadyExists: (lobbyName: string) => `:x: A lobby **${lobbyName}** já existe!\nDigite **!join ${lobbyName}** para entrar.`,
    lobbyCleaned: (lobbyName: string) => `:white_check_mark: **${lobbyName}** liberada com sucesso.\nObs: ela continua criada.`,
    lobbyCreated: (lobbyName: string) => `:white_check_mark: Lobby **${lobbyName}** criada com sucesso!\nDigite **!join ${lobbyName}** para entrar.`,
    lobbyDeleted: (lobbyName: string) => `:white_check_mark: Lobby **${lobbyName}** removida.\nDigite **!create nome da lobby** para criar uma nova.`,
    lobbyDoesNotExists: (lobbyName: string) => `:x: A lobby **${lobbyName}** não existe!\nDigite **!create ${lobbyName}** para criar.`,
    lobbyEmpty: (lobbyName: string) => `A lobby **${lobbyName}** está vazia. :frowning:`,
    mustHaveAtLeastFivePlayersToStartLobby: (lobbyName: string, playersCount: number) => `:x: O número de jogadores mínimo para começar uma lobby é 5.\nA lobby **${lobbyName}** tem ${playersCount}. Digite !list *nome da lobby* para ver os jogadores`,
    noLobbiesOpened: `Não existe nenhuma lobby aberta. :frowning:\nDigite **!create nome da lobby** para criar uma.`,
    openedLobbies: `:face_with_monocle: As lobbies abertas são:`,
    playerAlreadyInLobby: (lobbyName: string, playerName: string) => `:x: **${playerName}** já está na lobby **${lobbyName}**.`,
    playerIsNotPartOfLobby: (lobbyName: string, playerName: string) => `${playerName} não faz parte da lobby **${lobbyName}**.`,
    playerJoinnedLobby: (lobbyName: string, playerName: string, playersCount: number) => `**${playerName}** entrou na lobby **${lobbyName}** (${playersCount} jogadores).`,
    playerLeftLobby: (lobbyName: string, playerName: string) => `:white_check_mark: ${playerName} saiu da lobby **${lobbyName}**.`,
    typeListToSeeSpecificLobby: `Digite **!list nome da lobby** pra ver uma específica. :stuck_out_tongue_winking_eye:`
})