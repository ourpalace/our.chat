import {CacheUser, User} from "../structs";

export class Collection {
    raw: Array<CacheUser>
    constructor() {
        this.raw = [];
    }
    set(user: User) {
        this.raw.push({user: user})
        return this;
    }
    get(id: String) {
        return this.raw.find((g) => g.user.id == id)
    }
}