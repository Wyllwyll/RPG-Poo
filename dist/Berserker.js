"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserker = void 0;
const Enemy_1 = require("./Enemy");
class Berserker extends Enemy_1.Enemy {
    constructor(name, health, strength) {
        super(name, health, strength);
    }
    setDamage(damage) {
        console.log("protection 30%: degat recus: ", damage * 0.7);
        this.setHealth(this.getCurrentHealth() - damage * 0.7);
    }
}
exports.Berserker = Berserker;
