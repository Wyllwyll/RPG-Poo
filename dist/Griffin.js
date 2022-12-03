"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.griffin = void 0;
const Enemy_1 = require("./Enemy");
class griffin extends Enemy_1.Enemy {
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
        console.log(this.getName, ", le Griffin s'envole");
        this.flying = true;
    }
    attackfromsky(opponent) {
        console.log("attaque en vol du Griffin bonus d'attaque 10% :", this.getStrength() * 1.1 * this.getLvl());
        opponent.setDamage(this.getStrength() * 1.1 * this.getLvl());
        this.flying = false;
        console.log(this.getName(), ", le griffin atterrit");
    }
    setDamage(damage) {
        if (this.flying) {
            console.log(this.getName(), " resistance en vol 10%, degat reduit à :", damage * 0.9);
            this.setHealth(this.getCurrentHealth() - damage * 0.9);
        }
        else {
            console.log(this.getName(), "griffin au sol, degat subit :", damage);
            this.setHealth(this.getCurrentHealth() - damage);
        }
    }
}
exports.griffin = griffin;
