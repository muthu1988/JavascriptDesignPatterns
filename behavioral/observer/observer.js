class GameEvent {
    constructor() {
        this.events = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.events.set(this.count++, handler);
        return this.count;
    }

    unsubscribe(key) {
        this.events.delete(key);
    }

    fire(sender, args) {
        this.events.forEach((v) => {
            v(sender, args);
        });
    }
}

class Game {
    constructor() {
        this.addRatEvent = new GameEvent();
        this.removeRatEvent = new GameEvent();
        this.notifyRatEvent = new GameEvent();
    }
    fireRatEnters(sender, args) {
        this.addRatEvent.fire(sender, args);
    }
    fireRemoveRat(sender, args) {
        this.removeRatEvent.fire(sender, args);
    }
    fireNotifyRat(sender, args) {
        this.notifyRatEvent.fire(sender, args);
    }
}

class Rat {
    constructor(game) {
        this.game = game;
        this.attack = 1;
        game.addRatEvent.subscribe(this.addRatHandle.bind(this));
        game.removeRatEvent.subscribe(this.removeRatHandle.bind(this));
        game.notifyRatEvent.subscribe(this.notifyRatHandle.bind(this));
        game.fireRatEnters(this);
    }
    addRatHandle(sender, args) {
        if(sender !== this) {
            this.attack++;
            this.game.fireNotifyRat(this, sender)
        }
    }
    notifyRatHandle(sender, newRat) {
        if(newRat === this) this.attack++;
    }
    removeRatHandle(sender, args) {
        this.attack--;
    }
    die() {
        this.game.fireRemoveRat(this);
    }
}

const game = new Game();
const rat1 = new Rat(game);
const rat2 = new Rat(game);
console.log(rat1.attack);
console.log(rat2.attack);
rat1.die();
console.log(rat2.attack);
console.log(game);