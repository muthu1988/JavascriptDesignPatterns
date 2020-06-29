class Sentence {
    constructor(plainText) {
        this.text = plainText ? plainText.split(' ') : [];
        this.flyweight = {};
    }

    at(index) {
        this.flyweight[index] = { capitalize: false }
        return this.flyweight[index];
    }

    toString() {
        return this.text.map((t, i) => this.flyweight[i] && this.flyweight[i].capitalize ? t.toUpperCase() : t).join(' ');
    }
}

const s = new Sentence('my name is muthu');
console.log('at mtd returns the flyweight, that stores the capitalize data');
s.at(3).capitalize = true;
console.log(s.toString())