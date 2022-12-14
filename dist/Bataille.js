"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
class Battle {
    constructor(hero, opponent) {
        this.hero = hero;
        this.opponent = opponent;
        this.round = 1;
    }
    toDeath() {
        while (this.hero.isAlive() && this.opponent.isAlive()) {
            console.log("round=", this.round);
            console.log(`${this.hero.getName()} ${this.hero.getCurrentHealth()} VS ${this.opponent.getName()} :${this.opponent.getCurrentHealth()}`);
            if (this.round % 2 == 1) {
                console.log(this.hero.getName(), " attack :", this.hero.attack(this.opponent));
            }
            else {
                console.log(this.opponent.getName(), " attack :", this.opponent.attack(this.hero));
            }
            this.round += 1;
        }
        /*        if (this.hero.isAlive()) {
                    return this.opponent.die()
                }
                else {
                    return this.opponent.die()
                } */
    }
}
exports.Battle = Battle;
