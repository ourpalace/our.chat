import { Client } from "..";

export interface RawUser {
    id: String
    avatarUrl?: String
    name: String
    isBot: Boolean
    badges: Number
}

export class User {
    id: String
    avatar: String
    username: String
    bot: Boolean
    badges: Number
    client: Client
    online: Boolean
    constructor(client: Client, user: RawUser) {
        return {
            id: user.id,
            avatar: user.avatarUrl,
            username: user.name,
            bot: user.isBot,
            badges: user.badges,
            client,
            online: client.statuses.get(user.id)?.online || null
        }
    }
}