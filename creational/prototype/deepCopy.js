class Employee {
    constructor(name, place) {
        this.name = name;
        this.place = place;
    }
    getName() {
        return this.name;
    }
}

class Place {
    constructor(city, state, country) {
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

class Serializer {
    constructor(types) {
        this.types = types;
    }

    markRecursive(object) {
        let idx = this.types.findIndex(t => {
            return t.name === object.constructor.name;
        });
        if (idx !== -1) {
            object['typeIndex'] = idx;

            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] != null)
                    this.markRecursive(object[key]);
            }
        }
    }

    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) {
            let type = this.types[object.typeIndex];
            let obj = new type();
            for (let key in object) {
                if (object.hasOwnProperty(key) && object[key] != null) {
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
        return object;
    }

    clone(object) {
        this.markRecursive(object);
        let copy = JSON.parse(JSON.stringify(object));
        return this.reconstructRecursive(copy);
    }
}

let emp1 = new Employee("muthu", new Place('CHENNAI', 'TN', 'IN'));
const se = new Serializer([Employee, Place]);
let emp2 = se.clone(emp1);
emp2.name = 'ranji';
console.log(emp2);console.log(emp1);    
