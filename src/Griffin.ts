import { Character } from "./Character";
import { Enemy } from "./enemy";

export class griffin extends Enemy {
    private round:number;
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
        this.round = 0;
    }
    attack(opponent: Character): string {
        switch(this.round){
            case 0 :{
                super.attack(opponent);
                this.round+=1;
                break;
            }
            case 1 :{
                this.fly();
                this.round+=1;
                break;
            }
            case 2 :{
                this.attackfromsky(opponent);
                this.round=0;
                break;
            }
        }
        return
    }
    fly(): void {
        console.log(this.getName,", le Griffin s'envole");
        this.flying = true;
    }
    attackfromsky(opponent: Character): void {
        console.log("attaque en vol du Griffin bonus d'attaque 10% :",this.getStrength()*1.1*this.getLvl());
        
        opponent.setDamage(this.getStrength() * 1.1*this.getLvl());
        this.flying = false;
        console.log(this.getName(),", le griffin atterrit");
        
    }
    setDamage(damage: number): void {
        if (this.flying) {
            console.log(this.getName()," resistance en vol 10%, degat reduit à :",damage*0.9);
            
            this.setHealth(this.getCurrentHealth() - damage * 0.9);
        } else {
            console.log(this.getName(),"griffin au sol, degat subit :", damage);
            
            this.setHealth(this.getCurrentHealth() - damage);
        }
    }
}