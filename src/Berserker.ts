import { Enemy } from "./Enemy";
export class Berserker extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    setDamage(damage: number): string {
        this.setHealth(this.getCurrentHealth() - damage * 0.7);
        return `${this.getName} reçoit ${damage} de dégat -30% => ${damage*0.7}, sa health passe à ${this.getCurrentHealth}`;
    }
}