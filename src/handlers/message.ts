import {Client} from "..";
import { Message, User } from "../structs";
import {Collection, packet} from "../utils";

export function handleMessage(message: any, flag: any, client: Client) {
    const p = packet(message, flag)
    client.emit('raw', p)
    if (p.t == 1) {
        client.user = p.d.user
        client.users.set(p.d.user.id, new User(client, p.d.user));
        p.d.users.forEach(e => {client.users.set(e.id, new User(client, e)); client.statuses.set(e.id, {userID: e.id,online: true})})
        p.d.channels.forEach(e => client.channels.set(e.id, e));
        client.emit('ready', new User(client, p.d.user))
    } else if (p.t == 2) {
        const m = new Message(client, p.d);
        client.emit('message', m);
    } else if (p.t == 8) {
        const user = new User(client, p.d);
        client.emit('userUpdate', user)
        client.users.set(user.id, user)
    } else if (p.t == 12) {
        client.statuses.set(p.d.user.id, {
            userID: p.d.user.id,
            online: p.d.statusType == 1 ? true : false
        })
        client.emit('statusUpdate', p.d)
    }
}