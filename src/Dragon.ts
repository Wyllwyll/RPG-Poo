import { Character } from "./Character";
import { Enemy } from "./enemy";
export class Dragon extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
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