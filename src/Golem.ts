import { Enemy } from "./Enemy";
export class Golem extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength)
    }
    setDamage(damage: number):void {
        if ((Math.random() * 100) <= 50) {
            this.setHealth(this.getCurrentHealth() - damage);
        }
    }
}