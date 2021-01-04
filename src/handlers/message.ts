import { Client } from "..";
import {Collection, packet} from "../private_utils";

export function handleMessage(message: any, flag: any, client: Client) {
    const p = packet(message, flag)
    client.emit('raw', p)
    if (p.t == 1) {
        client.user = p.d.user
        client.channels = new Collection()
        client.users = new Collection()
        p.d.channels.forEach(e => client.channels.add(e))
        p.d.users.forEach(e => client.users.add(e))
        client.emit('ready', p.d.user)
    }
}