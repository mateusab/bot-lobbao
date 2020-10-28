import { RegisterLevel } from '@services/LevelService/usecases/RegisterLevel'
import { Message } from 'discord.js';
import { Injectable } from "@nestjs/common";

const registerLevel = new RegisterLevel()

@Injectable()
export class LevelService {
    register (level: string, message: Message) {
        registerLevel.execute(level, message)
    }
}