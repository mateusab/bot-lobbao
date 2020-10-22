import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class RegisterLevel {
    async execute(level: string, message: Message) {
        let { cache } = message.guild.roles

        let role = cache.find(role => role.name === level)
        if (role) {
            await message.member.roles.remove(message.member.roles.cache)

            message.member.roles.add(role).then(member => {
                message.channel.send(`Level ${role} atribuido para o ${member.displayName}!`)
            }).catch(err => {
                console.log(err)
            })
        } else {
            message.channel.send("Level não encontrado! Por favor insira um level de 0 a 20!")
        }
    }
}