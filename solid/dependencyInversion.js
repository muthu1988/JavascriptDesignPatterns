const Realtionships = Object.freeze({
    Parent: 0,
    Child: 1,
    Spouse: 2,
    Sibling: 3
})

// Low level module
class Person {
    constructor(name) {
        this.name= name;
        this.realtions = {};
    }
    addRelations(realtions) {
        this.realtions = realtions;
    }
}

// Abstract class for Realtion, to avoid dependency in High level module
class ResearchBrowser {
    constructor() {
        if(this.constructor.name === 'ResearchBrowser') throw new Error('ResearchBrowser is abstract');
    }
    findChildrens(){}
}

// Low level module
class Realtion extends ResearchBrowser {
    constructor() {
        super();
        this.data = [];
    }
    addChild(parent, child) {
        this.data.push({
            person: parent.name, realtionship: Realtionships.Child, relative: child.name
        });
    }
    addSpouse(partner, spouse) {
        this.data.push({
            person: partner.name, realtionship: Realtionships.Spouse, relative: spouse.name
        });
    }
    findChildrens() {
        return this.data.filter((t) => t.realtionship === Realtionships.Child);
    }
}

// High level module
class Research {
    constructor(browser) {
        this.browser = browser;
    }
    doResearch() {
        for(const c of this.browser.findChildrens()) {
            console.log(`${c.person} has a child ${c.relative}`);
        }
    }
}

const parent = new Person('John');
const child1 = new Person('Jude');
const child2 = new Person('Joseph');

const realtions = new Realtion();
realtions.addChild(parent, child1);
realtions.addChild(parent, child2);
parent.addRelations(realtions);

const research = new Research(parent.realtions);
research.doResearch();

