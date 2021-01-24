export class Collection<key, val> extends Map<key, val> {
    private valArr: Array<val>
    private keyArr: Array<key>
    constructor() {
        super()
    }
    set(key, val) {
        super.set(key, val)
        this.valArr = [...this.values()]
        this.keyArr = [...this.keys()]
        return this;
    }

    clear(): void {
        super.clear()
        this.valArr = []
        this.keyArr = []
    }

    arr() {
        return this.valArr;
    }

    find(func: (value) => Boolean) {
        for (const val in this.valArr) {
            if (func(val)) return val
        }
        return undefined
    }
}