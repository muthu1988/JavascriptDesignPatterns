class Creature {
    constructor(name, attack = 1, defence = 1) {
        this.name = name;
        this.attack = attack;
        this.defence = defence;
    }
}

class CreatureModifier {
    constructor(creature) {
        this.creature = creature;
        this.next = null;
    }
    add(modifier) {
        if(this.next) this.next.add(modifier);
        else this.next = modifier;
    }
    handle() {
        if(this.next) this.next.handle();
    }
}

class DoubleAttackModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }
    handle() {
        console.log(`Doubling ${this.creature.name} attack`);
        this.creature.attack *= 2;
        super.handle();
    }
}

class IncreaseDefenceModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }
    handle() {
        console.log(`Increasing ${this.creature.name} defence`);
        this.creature.defence += 1;
        super.handle();
    }
}

const goblin = new Creature('goblin');
const modifier = new CreatureModifier(goblin);
modifier.add(new DoubleAttackModifier(goblin));
modifier.add(new IncreaseDefenceModifier(goblin));
modifier.add(new DoubleAttackModifier(goblin));
modifier.handle();
console.log(goblin);



