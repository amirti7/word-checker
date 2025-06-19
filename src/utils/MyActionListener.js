class MyActionListener {

    constructor() {
        this.listeners = {};
    }

    registerListener(action, listener) {
        if (!this.listeners[action]) {
            this.listeners[action] = [];
        }
        this.listeners[action].push(listener);
    }

    removeListener(action) {
        delete this.listeners[action];
    }

    emit(action, data) {
        if (!this.listeners[action]) {
            throw new Error(`Action ${action} not found`);
        }
        this.listeners[action].forEach(listener => listener(data));
    }
}

export default MyActionListener;