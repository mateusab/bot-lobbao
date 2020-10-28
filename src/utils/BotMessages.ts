import { Role } from "discord.js";

export const BotMessages = Object.freeze({
    clearLobbyDefaultMessage: (playerId: string) => `<@${playerId}> Digite **!clear nome da lobby** para limpar os jogadores uma lobby.`,
    createLobbyDefaultMessage: (playerId: string) => `<@${playerId}> Digite **!create nome da lobby** para criar uma lobby`,
    deleteLobbyDefaultMessage: (playerId: string) => `<@${playerId}> Digite **!delete nome da lobby** para deletar uma lobby.`,
    firstPlayerJoinnedLobby: (lobbyName: string, playerId: string) => `:white_check_mark: <@${playerId}> foi o primeiro a entrar na lobby **${lobbyName}**.`,
    joinLobbyDefaultMessage: (playerId: string) => `<@${playerId}> Digite **!join nome da lobby** para entrar em uma lobby`,
    leaveLobbyDefaultMessage: (playerId: string) => `<@${playerId}> Digite **!leave nome da lobby** para sair de uma lobby`,
    levelAssigned: (role: Role, playerId: string) => `${role} atribuido para o <@${playerId}>!`,
    levelNotFound: (playerId: string) => `Level não encontrado! Por favor insira um level de 0 a 20! <@${playerId}>`,
    listLobby: (lobbyName: string, playersCount: number) => `Lobby: **${lobbyName}** - ${playersCount} jogadores`,
    listLobbyWithOnePlayer: (lobbyName: string, playersCount: number) => `Lobby: **${lobbyName}** - ${playersCount} jogador`,
    listTeam: (name: string, levelAvg: number) => `**${name}** - Média: ${levelAvg} :zap:`,
    lobbyAlreadyExists: (lobbyName: string) => `:x: A lobby **${lobbyName}** já existe!\nDigite **!join ${lobbyName}** para entrar.`,
    lobbyCleaned: (lobbyName: string) => `:white_check_mark: **${lobbyName}** liberada com sucesso.\nObs: ela continua criada.`,
    lobbyCreated: (lobbyName: string) => `:white_check_mark: Lobby **${lobbyName}** criada com sucesso!\nDigite **!join ${lobbyName}** para entrar.`,
    lobbyDeleted: (lobbyName: string) => `:white_check_mark: Lobby **${lobbyName}** removida.\nDigite **!create nome da lobby** para criar uma nova.`,
    lobbyDoesNotExists: (lobbyName: string) => `:x: A lobby **${lobbyName}** não existe!\nDigite **!create ${lobbyName}** para criar.`,
    lobbyEmpty: (lobbyName: string) => `A lobby **${lobbyName}** está vazia. :frowning:`,
    mustHaveAtLeastFivePlayersToStartLobby: (lobbyName: string, playersCount: number) => `:x: O número de jogadores mínimo para começar uma lobby é 5.\nA lobby **${lobbyName}** tem ${playersCount}. Digite !list *nome da lobby* para ver os jogadores`,
    noLobbiesOpened: `Não existe nenhuma lobby aberta. :frowning:\nDigite **!create nome da lobby** para criar uma.`,
    onlyPlayersWithLevelCanJoinLobbies: (playerId: string) => `<@${playerId}> apenas jogadores com level podem jogar! :frowning2:\nExemplo para atribuir seu level: digite !level 15`,
    openedLobbies: `:face_with_monocle: As lobbies abertas são:`,
    playerAlreadyInLobby: (lobbyName: string, playerId: string) => `:x: <@${playerId}> já está na lobby **${lobbyName}**.`,
    playerIsNotPartOfLobby: (lobbyName: string, playerName: string) => `${playerName} não faz parte da lobby **${lobbyName}**.`,
    playerJoinnedLobby: (lobbyName: string, playerId: string, playersCount: number) => `<@${playerId}> entrou na lobby **${lobbyName}** (${playersCount} jogadores).`,
    playerLeftLobby: (lobbyName: string, playerName: string) => `:white_check_mark: ${playerName} saiu da lobby **${lobbyName}**.`,
    startLobbyDefaultMessage: `Digite **!start nome da lobby** para começar uma lobby.`,
    typeALevel: (playerId: string) => `<@${playerId}> digite um level para este comando. Exemplo: !level 15`,
    typeListToSeeSpecificLobby: `Digite **!list nome da lobby** pra ver uma específica. :stuck_out_tongue_winking_eye:`
})