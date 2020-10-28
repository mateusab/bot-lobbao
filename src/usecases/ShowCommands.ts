import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShowCommands {
    execute(message: Message) {
        message.channel.send(`ATENÇÃO PARA OS COMANDOS DO LOBÃO! :raised_hands_tone1:

<:sprayBom:344231411525353472> **!level** registra um level pra você. Exemplo: !level 20 (não vale mentir, SA FA DO!) :eyes:
:pencil: **!list** lista todas as lobbies abertas. Se quiser ver os jogadores de uma lobby, digite **!list nome da lobby**.
:construction_site: **!create nome da lobby** cria uma lobby.
:inbox_tray: **!join nome da lobby** entra em uma lobby.
:leaves: **!leave nome da lobby** sai de uma lobby.
:soap: **!clear nome da lobby** retira todos os jogadores de uma lobby.
:no_entry_sign: **!delete nome da lobby** deleta uma lobby.
:video_game: **!start nome da lobby** começa e separa os jogadores de uma lobby.

Qualquer dúvida, já sabe né? https://www.google.com.br <:laugh_hard:770971049654878219>`)
    }
}