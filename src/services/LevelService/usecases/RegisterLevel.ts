import { CSGO_ROLE_MAIN_NAME } from '@config/constants';
import { BotMessages } from '@utils/BotMessages';
import { LevelEnum } from '@level/LevelEnum';
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

@Injectable()
export class RegisterLevel {
    async execute(level: string, message: Message) {
        const playerId = message.author.id
        if (level === undefined) {
            message.channel.send(BotMessages.typeALevel(playerId))
            return
        }

        let { cache } = message.guild.roles

        let role = cache.find(role => role.name === LevelEnum[Number(level)])

        if (role) {
            const roleToBeDeleted = message.member.roles.cache.find(role => role.name.includes(CSGO_ROLE_MAIN_NAME))
            //console.log('role to be deleted: ', roleToBeDeleted.name)

            if (roleToBeDeleted) {
                message.member.roles.remove(roleToBeDeleted)
            }

            message.member.roles.add(role).then(member => {
                message.channel.send(BotMessages.levelAssigned(role, playerId))
            }).catch(err => {
                console.log(err)
            })
        } else {
            message.channel.send(BotMessages.levelNotFound(playerId))
        }
    }
}