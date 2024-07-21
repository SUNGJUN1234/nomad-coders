interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key];
    }
    clear() {
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>()
stringsStorage.set("SS", "hi")
stringsStorage.get("SS");

const booleansStroage = new LocalStorage<boolean>() 
booleansStroage.set("BB", false)
booleansStroage.get("BB");