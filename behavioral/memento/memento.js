class Token {
    constructor(value = 0) {
        this.value = value;
    }
}

class Memento {
    constructor() {
        this.tokens = [];
    }
}

class TokenMachine {
    constructor() {
        this.tokens = [];
    }

    addTokenValue(value) {
        return this.addToken(new Token(value));
    }

    addToken(token) {
        this.tokens.push(token);
        const m = new Memento();
        m.tokens = this.tokens.map((t) => new Token(t.value));
        return m;
    }

    revert(m) {
        this.tokens = m.tokens.map(t => new Token(t.value));
    }
}

const tm = new TokenMachine();

const m1 = tm.addTokenValue(12);
console.log(tm.tokens)
const m2 = tm.addTokenValue(22);
console.log(tm.tokens);
tm.revert(m1);
console.log(tm.tokens);