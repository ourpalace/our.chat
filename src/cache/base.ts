import {Client} from "..";
import {Collection} from "../private_utils"
export class Cache {
    constructor(client) {
        this._init(client)
    }
    _init(client: Client) {
        client.users = new Collection()
    }
}