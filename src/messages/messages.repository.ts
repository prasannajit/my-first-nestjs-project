import { Injectable } from "@nestjs/common";
import { promises as fsp } from "fs"

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const content = await fsp.readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        return messages[id];
    }

    async findAll() {
        const content = await fsp.readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        return messages;
    }

    async create(message: string) {
        const content = await fsp.readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content: message };
        await fsp.writeFile('messages.json', JSON.stringify(messages));
    }
}