import { Enemy } from "./Enemy";
export class Berserker extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    setDamage(damage: number): void {
        this.setHealth(this.getCurrentHealth() - damage * 0.7);
    }
}