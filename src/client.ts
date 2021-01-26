import {EventEmitter} from 'events';
import ws from 'ws'
import {handleMessage} from './handlers';
import {Login, User, Presence, Channel} from './structs/';
import {Collection, heartbeat} from './utils';

export class Client extends EventEmitter {
    ws: ws
    token: String
    users: Collection<String, User>
    statuses: Collection<String, Presence>
    channels: Collection<String, Channel>
    user: User
    private connected: Boolean
    private heartbeat: any
    constructor () {
        super();
        this.users = new Collection()
        this.statuses = new Collection()
        this.channels = new Collection()
    }
    connect(token: String) {
        this.ws = new ws('wss://api.veld.chat')
        this.ws.on('open', () => {
            if (this.connected) return;
            this.token = token;
            const loginObj: Login = {
                token,
                bot: true
            }
            heartbeat(this)
            const loginStr = JSON.stringify({          
                t: 0,
                d: loginObj
            })
            this.ws.send(loginStr)
            this.ws.on('error', (err) => {this.emit('debug', `[Websocket error] ${err}`); this.ws.close(); this.connect(this.token)})
            this.ws.on('close', (code) => {this.emit('debug', `[Websocket closed] Error code: ${code}`);this.connected = false;delete this.heartbeat;this.connect(this.token);})
            this.ws.on('message', (message: any, flag: any) => {handleMessage(message, flag, this)})
        })
    }
}
