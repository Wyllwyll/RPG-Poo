import { Character } from "./Character";
import { Enemy } from "./Enemy";
export class Dragon extends Enemy {
    round:number;
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
        console.log(this.getName()," s'envole");
        this.flying = true;
    }
    attackfromsky(opponent: Character) {
        console.log("attaque aerienne de Dragon bonus 10%")
        opponent.setDamage(this.getStrength() * 1.1 * this.getLvl());
        this.flying = false;
        console.log(this.getName()," ,le Dragon atterrit");
    }
    setDamage(damage: number): void {
        if (this.flying) {
            console.log("Dragon en vole, resistance totale de 60% : degat ",damage*0.4);
            
            this.setHealth(this.getCurrentHealth() - damage * 0.4);
        } else {
            console.log("Dragon au sol, resistance de 50% : degat ",damage*0.5);
            this.setHealth(this.getCurrentHealth() - damage * 0.5);
        }
    }
}