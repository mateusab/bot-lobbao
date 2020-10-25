import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ShowCommands {
    execute(message: Message) {
        message.channel.send(`ATENÇÃO PARA OS COMANDOS DO LOBÃO! :raised_hands_tone1:

**!level** registra um level pra você. Exemplo: !level 20 (não vale mentir, SA FA DO!) :eyes:
**!list** lista todas as lobbies abertas. Se quiser ver os jogadores de uma lobby, digite **!list nome da lobby**.
**!create nome da lobby** cria uma lobby.
**!join nome da lobby** entra em uma lobby.
**!leave nome da lobby** sai de uma lobby.
**!clear nome da lobby** retira todos os jogadores de uma lobby.
**!delete nome da lobby** deleta uma lobby.

Qualquer dúvida, já sabe né? https://www.google.com.br! :rofl:`)
    }
}