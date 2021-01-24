import { Client } from "..";

export interface RawUser {
    id: String
    avatarUrl?: String
    username: String
    isBot: Boolean
    badges: Number
}

export class User {
    constructor(client: Client, user: RawUser) {
        return {
            id: user.id,
            avatar: user.avatarUrl,
            username: user.username,
            bot: user.isBot,
            badges: user.badges,
            client,
            online: client.statuses.get(user.id)?.online || null
        }
    }
}