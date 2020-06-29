class Person
{
  constructor(age=0)
  {
    this.age = age;
  }

  drink() { return 'drinking'; }
  drive() { return 'driving'; }
  drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
  constructor(person)
  {
    this.person = person;
  }
  // todo
  set age(age) {
    this.person.age = age;
  }
  get age() {
    return this.person.age;
  }
  drink() {
    return this.person.age >= 18 ? this.person.drink() : 'too young';
  }
  drive() {
    return this.person.age >= 16 ? this.person.drive() : 'too young';
  }
  drinkAndDrive () {
      return 'dead';
  }
}

console.log('ResponsiblePerson is a proxy for Person with modified functionality')
const p = new ResponsiblePerson(new Person());
p.age = 20;
console.log(p.drink());