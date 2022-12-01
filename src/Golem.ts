import { Enemy } from "./Enemy";
export class Golem extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength)
    }
    setDamage(damage: number): string {
        if ((Math.random() * 100) <= 50) {
            this.setHealth(this.getCurrentHealth() - damage);
            return `${this.getName} reçoit ${damage} de dégat, sa health passe à ${this.getCurrentHealth}`;
        } else {
            return `${this.getName} reçoit ${damage} de dégat mais annule les dégats, sa health reste ${this.getCurrentHealth}`;
        }
    }
}