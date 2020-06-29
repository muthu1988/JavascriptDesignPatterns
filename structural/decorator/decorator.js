class Bird {
    constructor(age = 0) {
        this.age = age;
    }
    fly() {
        return this.age < 10 ? 'flying' : 'too old';
    }
}

class Lizard {
    constructor(age = 0) {
        this.age = age;
    }
    crawl() {
        return this.age > 1 ? 'crawling' : 'too young';
    }
}

class Dragon {
    constructor(age = 0) {
        this._age = age;
        this._bird = new Bird(age);
        this._lizard = new Lizard(age);
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = this._bird.age = this._lizard.age = value;
    }
    fly() {
        return this._bird.fly();
    }
    crawl() {
        return this._lizard.crawl();
    }
}

const dragon = new Dragon(8);
console.log("Dragon is a decorator for bird and lizard, can fly and crawl");
console.log(dragon.fly());
console.log(dragon.crawl());