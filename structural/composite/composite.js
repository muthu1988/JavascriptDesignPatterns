class SingleValue {
    constructor(value) {
        this.value = [value];
    }
    [Symbol.iterator]() {
        let returned = false;
        return {
            next: () => ({
                value: this.value,
                done: returned++
            })
        }
    }   
}

class ManyValues extends Array {

}

let sum = function (containers) {
    let sum = 0;
    for (const c of containers) {
        for (let i of c) {
            sum = sum +parseInt(i);
        }
    }
    return sum;
};

const single = new SingleValue(10);
const many = new ManyValues();
many.push(20);many.push(30);many.push(40);
console.log('Sum function takes both a object and a collection, but behaves same')
console.log(sum([single, many]));