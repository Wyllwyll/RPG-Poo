
import { Enemy } from "./Enemy";
import { Hero } from "./Hero";

export class Battle {
    hero: Hero
    opponent: Enemy
    round: number
    stat: []


    constructor(hero: Hero, opponent: Enemy) {
        this.hero = hero
        this.opponent = opponent
        this.round = 1
    }

    toDeath() {
        while (this.hero.isAlive() && this.opponent.isAlive()) {
            console.log("vieHero: ", this.hero.getCurrentHealth(), "VS ", "vieOpponent ", this.opponent.getCurrentHealth());
            if (this.round % 2 == 0) {
                this.hero.attack(this.opponent)
            } else {
                this.opponent.attack(this.hero)
            }
            this.round += 1
        }
       



    }


}


