import { Enemy } from "./Enemy";
export class Werewolf extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    setDamage(damage: number): void {
        this.setHealth(this.getCurrentHealth() - damage * 0.5);
    }
}
