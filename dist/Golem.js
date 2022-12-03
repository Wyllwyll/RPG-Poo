"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Golem = void 0;
const Enemy_1 = require("./Enemy");
class Golem extends Enemy_1.Enemy {
    constructor(name, health, strength) {
        super(name, health, strength);
    }
    setDamage(damage) {
        if ((Math.random() * 100) <= 50) {
            console.log("degat sur Golem normaux", damage);
            this.setHealth(this.getCurrentHealth() - damage);
        }
        else {
            console.log("Golem ne subit pas de dégat");
        }
    }
}
exports.Golem = Golem;
