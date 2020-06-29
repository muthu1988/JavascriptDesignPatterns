class Singleton {
    constructor() {
        const instance = this.constructor.instance;
        if(instance) {
            return instance;
        }
        this.constructor.instance = this;
    }
    foo() {
        console.log('some mtd in singleton')
    }
}

let s1 = new Singleton();
let s2 = new Singleton();
console.log("Is s1 === s2 ? " + (s1 === s2));