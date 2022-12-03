"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Werewolf = void 0;
const Enemy_1 = require("./Enemy");
class Werewolf extends Enemy_1.Enemy {
    constructor(name, health, strength) {
        super(name, health, strength);
    }
    setDamage(damage) {
        console.log("protection 50%: degat recus: ", damage * 0.5);
        this.setHealth(this.getCurrentHealth() - damage * 0.5);
    }
}
exports.Werewolf = Werewolf;
