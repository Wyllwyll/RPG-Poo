import { Enemy } from "./Enemy";
import { Character } from "./Character";
export class griffin extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength)
    }
    fly(){
        this.flying=true;
    }
    attackfromsky(opponent:Character){
        opponent.setDamage(opponent.getHealth() - this.getStrength()*1.1);
    }
    setDamage(damage: number): void {
        if (this.flying){
            this.setHealth(this.getHealth()-damage*0.9);
        }else{
            this.setHealth(this.getHealth()-damage);
        }
    }
}