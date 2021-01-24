import { Client } from "..";
import { MessageOptions } from "./Message";
import fetch from 'node-fetch';

export interface RawChannel {
    id: String
    name: String
}

export class Channel {
    constructor(client: Client, chan: String | RawChannel) {
    async function _request(method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE', url: string, body: any) {
        // this func was taken from Million900o (gh)            
        return await fetch('https://api.veld.chat/' + url, {
            method: method,
            headers: { 'content-type': 'application/json', authorization: `Bearer ${client.token}` },
            body: body ? JSON.stringify(body) : undefined
        })
    }
        let channel;
        if (typeof chan == 'object') channel = chan
        else channel = client.channels.get(chan);
        return {
            id: channel.id,
            name: channel.name,
            send: async function(content) {
                const opts: MessageOptions = {}
                if (typeof content == 'object') opts.embed = content
                else opts.content = content 
                await _request("POST", `channels/${channel.id}/messages`, opts) 
            }
        };
    }
}