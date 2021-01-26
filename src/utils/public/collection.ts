export class Collection<key, val> extends Map<key, val> {
    private valArr: Array<val>
    private keyArr: Array<key>
    public arr: Array<val>
    constructor() {
        super()
        this.arr = this.valArr
    }
    set(key, val) {
        super.set(key, val)
        this.valArr = [...this.values()]
        this.arr = this.valArr
        this.keyArr = [...this.keys()]
        return this;
    }

    delete(key): boolean {
        this.valArr = null
        this.keyArr = null
        super.delete(key);
        return this._reloadArrays()
    }

    clear(): void {
        super.clear()
        this.valArr = []
        this.keyArr = []
        this.arr = this.valArr
    }

    find(func: (value) => Boolean) {
        for (const val in this.valArr) {
            if (func(this.valArr[val])) return this.valArr[val]
        }
        return undefined
    }

    findAll(func: (value) => Boolean): val[] {
        const arr = [];
        for (const val in this.valArr) {
            if (func(val)) arr.push(val)
        }
        return arr
    }

    private _reloadArrays(): boolean {
        this.valArr = [...this.values()]
        this.keyArr = [...this.keys()]
        this.arr = this.valArr
        return true;
    }
}
