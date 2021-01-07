import {Client} from "..";
import {Collection, packet} from "../utils";

export function handleMessage(message: any, flag: any, client: Client) {
    const p = packet(message, flag)
    client.emit('raw', p)
    if (p.t == 1) {
        client.user = p.d.user
        client.users = new Collection()
        p.d.users.forEach(e => client.users.set(e.id, e))
        client.emit('ready', p.d.user)
    }
}