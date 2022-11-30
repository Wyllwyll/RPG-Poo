import { Enemy } from "./enemy";

export class Golem extends Enemy {
    constructor(name: string, health: number, strengt: number) {
        super(name, health, strengt)
    }

    setDamage(damage: number) {
        if ((Math.random() * 100) <= 50) {
            this.setHealth(this.getHealth() - damage)
        }
    }
}