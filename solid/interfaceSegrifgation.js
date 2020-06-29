class Machine {
    constructor() {
        if(this.constructor.name === 'Machine') throw new Error("Machine is Abstarct");
    }
    print() {}
    scan() {}
    fax() {}
}

// Interface segrigation
class Printer {
    constructor() {
        if(this.constructor.name === 'Printer') throw new Error("Printer is Abstarct");
    }
}

class OldPrinter extends Machine {
    print() {
        console.log('Yes it prints')
    }
    scan() {
        throw new Error('Cant scan')
    }
}

const printer = new OldPrinter();
printer.print();
printer.scan();

console.log("Interface segrigation doesnt suit js as we dont have inteface here")