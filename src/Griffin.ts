import { Character } from "./Character";
import { Enemy } from "./enemy";
import { Hero } from "./Hero";

export class griffin extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength)
    }

    setDamage(damage: number): void {
        this.setHealth(this.getHealth() - damage * 0.1);
    }
    
        
    attack(opponent:Character){
        if(this.flying){
       opponent.setHealth(opponent.getHealth() - this.getStrenght() *0.1);
    }else{
    super.attack(opponent)
       
    }  
   
}
}