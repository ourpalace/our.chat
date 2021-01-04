import {User} from "../structs";

export class Collection {
    raw: Array<User>
    constructor() {
        this.raw = [];
    }
    set(user: User) {
        this.raw.push(user)
        return this;
    }
    get(id: String) {
        return this.raw.find((g) => g.id == id)
    }
}