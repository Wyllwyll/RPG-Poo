import { Enemy } from "./enemy";

export class Berserker extends Enemy {
    constructor(name: string, health: number, strengt: number) {
        super(name, health, strengt)
    }

    setDamage(damage: number): void {
        this.setHealth(this.getHealth() - damage * 0.7);
    }

}