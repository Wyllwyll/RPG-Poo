//const valid = document.getElementById('valid')
//const random = document.getElementById('random')
//const stat =document.getElementById('stat')

//valid.addEventListener('click',choix);
//random.addEventListener('click',random);


import { Enemy } from "./Enemy";
import { Hero } from "./Hero";

export class Battle {
    hero: Hero;
    opponent: Enemy;
    round: number;
    stat: string[];
    constructor(hero: Hero, opponent: Enemy) {
        this.hero = hero;
        this.opponent = opponent;
        this.round = 1;
    }
    toDeath(): void {
        this.stat.push(`${this.hero.getRace()} vs ${this.opponent.constructor.name}`);
        while (this.hero.isAlive() && this.opponent.isAlive()) {
            if (this.round % 2 == 1) {
                this.stat.push(`Tour ${this.round}: ${this.hero.getName()} ${this.hero.attack(this.opponent)}`);
            } else {
                this.stat.push(`Tour ${this.round}: ${this.opponent.getName()} ${this.opponent.attack(this.hero)}`);
            }
            this.round += 1;
        }
        if (this.hero.isAlive()) {
            this.stat.push(`... bye bye ${this.opponent.getName()}`);
            this.stat.push("Le combat est fini");
            this.stat.push(this.hero.raiseXp(2));
            this.stat.push(`${this.hero.getName} récupere 10% de health de ${this.opponent.getName}, ${this.hero.regeneration(this.opponent.getHealth())}`);
        } else {
            this.stat.push(`... bye bye ${this.hero.getName()}`);
            this.stat.push(`Le hero ${this.hero.getName()} est mort.`);
            this.stat.push("La partie est terminée");
        }
      /*  else {
            return this.opponent.die()*/


           
    }
    random1():void{
        Math.floor(Math.random()*10);
        console.log(this.random1); 
    }


  
  

  
   
    


}


