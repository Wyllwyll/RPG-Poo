//const valid = document.getElementById('valid')
//const random = document.getElementById('random')
//const stat =document.getElementById('stat')

//valid.addEventListener('click',choix);
//random.addEventListener('click',random);


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
       

      
    toDeath():void {
        while (this.hero.isAlive() && this.opponent.isAlive()) {
            console.log("round=", this.round);
            console.log(`${this.hero.getName()} ${this.hero.getCurrentHealth()} VS ${this.opponent.getName()} :${this.opponent.getCurrentHealth()}`);
            if (this.round % 2 == 1) {
                console.log(this.hero.getName()," attack :", this.hero.attack(this.opponent));
            } else {
                console.log(this.opponent.getName()," attack :", this.opponent.attack(this.hero));
            }
            this.round += 1

        }
/*        if (this.hero.isAlive()) {
            return this.opponent.die()
        }
        else {
            return this.opponent.die()*/


           
    }
    random1():void{
        Math.floor(Math.random()*10);
        console.log(this.random1); 
    }


  
  

  
   
    


}


