import {User} from "./User";

export interface Ready {
    user: User,
    members: User[]
    token: String
}

export interface Login {
    token: String,
    bot: Boolean
}