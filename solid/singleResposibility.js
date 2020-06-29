class Logs {

    constructor() {
        this.entries = {};
        this.count = 0;
    }

    addEntry(log) {
        let c = ++this.count;
        let entry = `${c}: ${log}`;
        this.entries[c] = entry;
    }

    toString() {
        console.log(Object.values(this.entries).join('\n'))
    }

    // Method not to concern of Logs - moved to Persist calss
    saveToFile() {
        console.log('Not the responsibility of Logs object');
    }

}

class Persist {
    constructor(data) {
        this.data = data;
    }
    saveToFile() {

    }
}

let l = new Logs();
l.addEntry("This is first line");
l.addEntry("This is second line");
l.toString();