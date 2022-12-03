"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragon = void 0;
const Enemy_1 = require("./Enemy");
class Dragon extends Enemy_1.Enemy {
    constructor(name, health, strength) {
        super(name, health, strength);
        this.round = 0;
    }
    attack(opponent) {
        switch (this.round) {
            case 0: {
                super.attack(opponent);
                this.round += 1;
                break;
            }
            case 1: {
                this.fly();
                this.round += 1;
                break;
            }
            case 2: {
                this.attackfromsky(opponent);
                this.round = 0;
                break;
            }
        }
        return;
    }
    fly() {
        console.log(this.getName(), " s'envole");
        this.flying = true;
    }
    attackfromsky(opponent) {
        console.log("attaque aerienne de Dragon bonus 10%");
        opponent.setDamage(this.getStrength() * 1.1 * this.getLvl());
        this.flying = false;
        console.log(this.getName(), " ,le Dragon atterrit");
    }
    setDamage(damage) {
        if (this.flying) {
            console.log("Dragon en vole, resistance totale de 60% : degat ", damage * 0.4);
            this.setHealth(this.getCurrentHealth() - damage * 0.4);
        }
        else {
            console.log("Dragon au sol, resistance de 50% : degat ", damage * 0.5);
            this.setHealth(this.getCurrentHealth() - damage * 0.5);
        }
    }
}
exports.Dragon = Dragon;
