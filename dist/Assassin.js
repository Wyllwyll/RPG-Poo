"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assassin = void 0;
const Enemy_1 = require("./Enemy");
class Assassin extends Enemy_1.Enemy {
    constructor(name, health, strength) {
        super(name, health, strength);
        this.round = 0;
    }
    attack(opponent) {
        opponent.setDamage(this.getStrength() * this.getLvl() * (Math.pow(1.1, this.round)));
        this.round += 1;
        return `${this.getName()} attaque ${opponent.getName()} avec Strengh * lvl * bonus de niveau ${this.round}=>
         ${this.getStrength() * this.getLvl() * Math.pow(1.1, this.round - 1)}`;
    }
}
exports.Assassin = Assassin;
