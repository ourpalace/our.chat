import {Embed} from "./Embed";
import {User} from "./User";

export interface Message {
    content?: String
    embed?: Embed
    mentions: String[]
    user: User
}

export interface MessageCreateArgs {
    content?: String
    embed?: Embed
}