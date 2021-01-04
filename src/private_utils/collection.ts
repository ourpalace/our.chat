export class Collection {
    raw: Array<any>
    constructor() {
        this.raw = [];
    }
    add(data: any) {
        this.raw.push(data)
        return this;
    }
    get(id: String) {
        return this.raw.find((g) => g.id == id)
    }
}