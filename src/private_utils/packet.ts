import pako from 'pako'
export function packet (message: any, flag: any) {
    if (typeof flag !== 'object') flag = {}
    if (flag.binary === null || typeof flag.binary === 'undefined') return JSON.parse(message)
    const inflated = pako.Inflate();
    inflated.push(message)
    if (inflated.err) throw new Error(`[Pako ERROR] An error occured while decompressing messages`)
    return JSON.parse(inflated.toString())
}