import { Character } from "./Character";
import { Enemy } from "./enemy";

export class Dragon extends Enemy{

    constructor(name: string, health: number, strenght: number) {
        super(name, health, strenght);
    }
    fly(){
        this.flying=true;
    }
    attackfromsky(opponent:Character){
        opponent.setDamage(opponent.getHealth() - this.getStrenght()*1.1);
    }
    setDamage(damage: number): void {
        if (this.flying){
            this.setHealth(this.getHealth()-damage*0.4);
        }else{
            this.setHealth(this.getHealth()-damage*0.5);
        }
    }
}