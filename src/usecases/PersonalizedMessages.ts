import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";
import * as faker from 'faker';


@Injectable()
export class PersonalizedMessages {
    execute(message: Message) {
        const playerId = message.author.id
        switch (message.author.discriminator) {
            // xips
            case '7239':
                message.channel.send(`Silêncio :shushing_face: o editor do SK THE DREAM está na lobby. :sunglasses: <@${playerId}>`)
                break;
                
            // viol
            case '2253':
                message.channel.send(`Former mibr :scared: :flag_br: Cuidado, ele é perigoso ele. :scream: AK TROVÃO :zap: :sunglasses: <@${playerId}>`)
                break;

            // xilanta
            case '1224':
                message.channel.send(`Bi-campeão mundial :trophy::trophy: do campeonato da firma. Tem que respeitar o <@${playerId}>.`)
                break;

            // rubens
            case '6714':
                message.channel.send(`Bem-vindo, <@${playerId}>! manda foto do Taurus? :heart_eyes_cat: :dog:`)
                break;

            // ale
            case '0891':
                message.channel.send(`Graças a Deus, <@${playerId}>! Me hospeda em um lugar decente? Essa máquina do xipsleNda tá uma BAGUNÇA! :LUL:`)
                break;

            // barreto
            case '5392':
                message.channel.send(`Salve <@${playerId}>! Vem de lobby meu parça :sunglasses:`)
                break;

            // mascot
            case '0624':
                message.channel.send(`Saudações oh grandioso level zero de Chernobyl! :raised_hands_tone1: Estava no seu aguardo, <@${playerId}>. :rofl:`)
                break;

            // duda
            case '5891':
                message.channel.send(`Acabou a reunião do condomínio! O <@${playerId}> chegou. :partying_face:`)
                break;

            // miley
            case '2260':
                message.channel.send(`Que tipo de fortnite é esse, <@${playerId}>? :thinking:`)
                break;

            // BigJhow
            case '4410':
                message.channel.send(`O maior clutchzeiro que a GamersClub já viu! VEM NA DELE: <@${playerId}>!! :skull_crossbones:`)
                break;

            // saw
            case '3066':
                message.channel.send(`Jig Saw? :clown: Gente que perigo!! <@${playerId}>`)
                break;

            // kenzo
            case '7258':
                message.channel.send(`<@${playerId}>? Desde que horas as filas ranqueadas do LoL estão fora do ar? :LUL:`)
                break;

            // kiq
            case '6460':
                message.channel.send(`Olha quem tá por aqui! Que surpresa boa, <@${playerId}> :heart_eyes_cat:`)
                break;

            // lzwan
            case '8378':
                message.channel.send(`Ô MANO, VIRA ESSA AWP PRA LÁ! EU TÔ NO SEU TIME, LZ! :angry: <@${playerId}>`)
                break;

            // lzwan
            case '2974':
                message.channel.send(`Ô MANO, VIRA ESSA AWP PRA LÁ! EU TÔ NO SEU TIME, LZ! :angry: <@${playerId}>`)
                break;

            // coeLho
            case '3405':
                message.channel.send(`Bem-vindo meu mano <@${playerId}> :rabbit:`)
                break;

            // Mateusser
            case '7428':
                message.channel.send(`Banhado nas mais belas águas de CHERNOBYL :man_scientist_tone1: direto para o lobby. Salve, <@${playerId}>!`)
                break;

            // Matob
            case '9029':
                message.channel.send(`Salve <@${playerId}>! Tá bonito hoje, hein? :heart:`)
                break;

            // Matob
            case '9753':
                message.channel.send(`Salve <@${playerId}>! Tá bonito hoje, hein? :heart:`)
                break;

            // Mestre
            case '3637':
                message.channel.send(`Na B, quem entrou, entrou. Quem não entrou não entra mais pq agora o mestrão tá lá de AUG. :smirk_cat: <@${playerId}>`)
                break;   
                
            // miller
            case '8226':
                message.channel.send(`Cara, se liga, <@${playerId}>, aproveitando que você tá aqui, deu um probleminha aqui no meu Ponto Mais... :laugh_hard:`)
                break;   

            // mlopes
            case '9002':
                message.channel.send(`Jogador em ascensão exponencial. Pode entrar M L O P E S! <@${playerId}> :heart_eyes:`)
                break;   

            // pejota
            case '5835':
                message.channel.send(`Agora pode botar quantos jogadores quiser nessa lobby que ela aguenta. O <@${playerId}> chegou! :sunglasses:`)
                break;   

            // godz
            case '5661':
                message.channel.send(`Godinossaur :sauropod: acredita que o xips ainda não escreveu testes pra mim? :smiling_face_with_tear: <@${playerId}>`)
                break;   

            // vyk7or
            case '5177':
                message.channel.send(`O <@${playerId}> vai te snipar e você não vai nem saber de onde :thumbsup_tone1:`)
                break;   

            // savilek
            case '1227':
                message.channel.send(`No VALORANT, sAviDrone. No CS, saviDoze. Brota, <@${playerId}>!`)
                break;

            // kin
            case '7805':
                message.channel.send(`Olha o <@${playerId}> aí minha gente!`)
                break;   

            // gersin
            case '6012':
                message.channel.send(`Gersin na área, meus amigos. <@${playerId}>`)
                break;   

            // ecko
            case '2377':
                message.channel.send(`ECKURUU! Jogador completo. Rápido na AWP, certeiro, bonito... Enfim! <@${playerId}>`)
                break;   

            default:
                let randomMessages = [
                    `Olha olha quem chegou, seja muito bem-vindo <@${playerId}>!`,
                    `O pai tá ON LI NE :sunglasses: <@${playerId}>`
                ]
                const max = randomMessages.length - 1
                const randomIndex = faker.random.number({ 'min': 0, 'max': max });
                message.channel.send(randomMessages[randomIndex]);
                break;
        }
    }
}