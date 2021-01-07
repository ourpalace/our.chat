import {Client} from "..";
import {Collection} from "../utils"
export class Cache {
    constructor(client) {
        this._init(client)
    }
    _init(client: Client) {
        client.users = new Collection()
    }
}