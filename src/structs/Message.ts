import { Client } from "..";
import { Channel } from "./Channel";
import {Embed} from "./Embed";
import {RawUser, User} from "./User";

export interface RawMessage {
    id: String;
    content?: String
    embed?: Embed
    mentions: String[]
    author: RawUser
    channelId: String
}

interface MessageConstructor {
    id: String
    content?: String
    embed?: Embed
    mentions?: String[]
    user: User
    channel: Channel
}
export class Message {
    constructor(client: Client, message: RawMessage) {
        const m: MessageConstructor = {
            id: message.id,
            user: new User(client, message.author),
            channel: new Channel(client, message.channelId)
        }
        if (message.content) m.content = message.content;
        if (message.mentions) m.mentions = message.mentions
        return m;
    }
}

export interface MessageOptions {
    embed?: Embed
    content?: String
}