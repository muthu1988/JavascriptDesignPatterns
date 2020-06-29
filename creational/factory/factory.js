class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class PersonFactory {
    constructor() {
        this.id = 0;
    }
    createPerson(name) {
        const p = new Person(this.id, name);
        this.id++;
        return p;
    }
}

const fact = new PersonFactory();
const p = fact.createPerson('muthu');
console.log(p);
const p1 = fact.createPerson('ranji');
console.log(p1);