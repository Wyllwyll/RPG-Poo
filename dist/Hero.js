"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const Character_1 = require("./Character");
class Hero extends Character_1.Character {
    constructor(name, health, strenght, race) {
        super(name, health, strenght);
        this.race = race;
    }
    getRace() {
        return this.race;
    }
    setRace(race) {
        this.race = race;
    }
    attack(opponent) {
        console.log(this.getName(), " de race:");
        switch (this.race) {
            case "Elf": {
                console.log("Elf");
                if (opponent.flying) {
                    opponent.setDamage(this.getStrength() * 1.10 * this.getLvl());
                    return `${this.getName()} attaque ${opponent.getName()} avec Strengh * lvl et un bonus de 10% => ${this.getStrength() * this.getLvl() * 1.1}`;
                }
                else {
                    opponent.setDamage(this.getStrength() * 0.9 * this.getLvl());
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl();
                }
            }
            case "Human": {
                console.log("Human");
                if (opponent.flying) {
                    opponent.setDamage(this.getStrength() * 0.9 * this.getLvl());
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl();
                }
                else {
                    opponent.setDamage(this.getStrength() * 1.10 * this.getLvl());
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl();
                }
            }
            case "Dwarf": {
                console.log("Dwarf");
                opponent.setDamage(this.getStrength() * this.getLvl());
                return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl();
            }
        }
    }
    setDamage(damage) {
        console.log(this.getName(), " recoit des degats");
        if (this.race == "Dwarf" && (Math.random() * 100) <= 20) {
            this.setHealth(this.getCurrentHealth() - damage / 2);
            console.log(" reduit de 50% :", damage / 2);
        }
        else {
            this.setHealth(this.getCurrentHealth() - damage);
            console.log(" de :", damage);
        }
    }
}
exports.Hero = Hero;
