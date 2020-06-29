class Creature {
    constructor(attack, health) {
        this.attack = attack;
        this.health = health;
        this.alive = this.health > 0;
        if(!Creature.ID) Creature.ID = 1;
        this.id = Creature.ID;
        Creature.ID++;
    }
}

class Game {
    constructor(damageStrategy) {
        this.damageStrategy = damageStrategy;
    }

    springTrapOn(creature) {
        this.damageStrategy.damage(creature);
        return creature.alive;
    }
}

class DamageStrategy {
    damage(creature) {
        if (creature.health <= 0) {
            creature.alive = false;
        } else {
            creature.alive = true;
        }
    }
}

class ConstantDamageStrategy extends DamageStrategy {
    damage(creature) {
        creature.health--;
        super.damage(creature);
    }
}

class GrowingDamageStrategy extends DamageStrategy {
    damage(creature) {
        let attackVal = GrowingDamageStrategy.impact && GrowingDamageStrategy.impact[creature.id] ? GrowingDamageStrategy.impact[creature.id] + 1 : 1;
        creature.health = creature.health - attackVal;
        super.damage(creature);
        GrowingDamageStrategy.impact = { [creature.id]: attackVal };
    }
}
GrowingDamageStrategy.impact = {};

const creature = new Creature(10,10);
const creature2 = new Creature(6,6);
const cds = new GrowingDamageStrategy();
const game = new Game(cds);
game.springTrapOn(creature);
game.springTrapOn(creature2);
game.springTrapOn(creature2);
game.springTrapOn(creature2);
console.log(creature);
console.log(creature2);
