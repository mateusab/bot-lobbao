import { LobbyService } from '@lobby/LobbyService';
import { RegisterLevel } from '@services/RegisterLevel';
import { Injectable } from "@nestjs/common";
import { Client, Message } from "discord.js"

const registerLevel = new RegisterLevel()
const lobbyService = new LobbyService()

 @Injectable()
 export class Bot {
    public listen(): Promise<string> {
         let client = new Client()
         client.on('message', async (message: Message) => {
            const prefix = "!"
            const commandBody = message.content.slice(prefix.length);
            const args = commandBody.split(' ');
            const command = args.shift().toLowerCase();
            let lobbyName
            //console.log('commandBody', commandBody)
            //console.log('args', args)
            //console.log('command: ', command)

            switch(command) {
                case "level":
                    await registerLevel.execute(args[0], message)
                    break;
                
                case "create":
                    lobbyName = args.join(" ")
                    await lobbyService.create(lobbyName, message)
                    break;

                case "join":
                    lobbyName = args.join(" ")
                    await lobbyService.join(lobbyName, message)
                    break;
                
                case "list":
                    lobbyName = args.join(" ")
                    await lobbyService.list(lobbyName, message)
                    break;
            
                default:
                    break;
            }

          });
         return client.login("NzY4NjU5Mjk4Nzg3OTE3ODQ2.X5DrwQ.mOFmBT9DTm5Qf7C8rQPvLuw6IBc")
     }
 }