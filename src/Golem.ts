import { Enemy } from "./Enemy";
export class Golem extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength)
    }
    setDamage(damage: number):void {
        if ((Math.random() * 100) <= 50) {
            console.log("degat sur Golem normaux", damage);
            
            this.setHealth(this.getCurrentHealth() - damage);
        }else{
            console.log("Golem ne subit pas de dégat");
        }
    }
}