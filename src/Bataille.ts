
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
            console.log("round=",this.round);

            console.log("So: ", this.hero.getCurrentHealth(), "VS ", "Croissant ", this.opponent.getCurrentHealth());
            if (this.round % 2 == 0) {
                console.log("lautre",this.hero.attack(this.opponent))
            } else {
                console.log("ça?",this.opponent.attack(this.hero))
            }
            this.round += 1
        }




    }


}


