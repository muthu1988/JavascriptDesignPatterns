class Person {
    constructor() {
        this.state = this.city = this.country = '';
        this.company = this.designation = '';
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
    }
    get lives() {
        return new PersonAddressBuilder(this.person);
    }
    get works() {
        return new PersonWordBuilder(this.person);
    }
    build() {
        return this.person;
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }
    city(city) {
        this.person.city = city;
        return this;
    }
    state(state) {
        this.person.state = state;
        return this;
    }
    country(country) {
        this.person.country = country;
        return this;
    }
}

class PersonWordBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }
    in(company) {
        this.person.company = company;
        return this;
    }
    as(designation) {
        this.person.designation = designation;
        return this;
    }
}

const person = new PersonBuilder()
    .lives.city('chennai').state('TN').country('IN')
    .works.in('alti').as('engineer')
    .build();

console.log(person);