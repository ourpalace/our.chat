export function heartbeat(c) {
    c.heartbeat = setInterval(() => {
        c.ws.send(    
            JSON.stringify({
                t: 1000,
                d: null,
            })
        )
    }, 15000)
}