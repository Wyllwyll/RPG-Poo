import { Character } from "./Character";
import { Enemy } from "./Enemy";
export class Dragon extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    fly(): void {
        this.flying = true;
    }
    attackfromsky(opponent: Character) {
        opponent.setDamage(opponent.getCurrentHealth() - this.getStrength() * 1.1);
    }
    setDamage(damage: number): void {
        if (this.flying) {
            this.setHealth(this.getCurrentHealth() - damage * 0.4);
        } else {
            this.setHealth(this.getCurrentHealth() - damage * 0.5);
        }
    }
}