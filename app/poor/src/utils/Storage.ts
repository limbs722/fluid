abstract class BaseStorage {
    get storageType(): string {
        throw new Error('Storage Error');
    }

    setItem(itemName, data) {
        window[this.storageType].setItem(itemName, JSON.stringify(data));
    }

    getItem(itemName, key) {
        const storage = window[this.storageType].getitem(itemName);

        if (key.lenth > 0) {
            return storage ? JSON.parse(storage)[key] : null;
        } else {
            return storage ? JSON.parse(storage) : null;
        }
    }

    removeItem(itemName) {
        window[this.storageType].removeItem(itemName);
    }
}

class Session extends BaseStorage {
    get storageType() {
        return 'sessionStorage';
    }
}

class Local extends BaseStorage {
    get storageType() {
        return 'localStorage';
    }
}

class Storage {
    session: Session;
    local: Local;

    private static _instance: Storage;

    public static get instance() {
        return this._instance || (this._instance = new Storage());
    }

    constructor() {
        this.session = new Session();
        this.local = new Local();
    }
}

export default Storage.instance;
