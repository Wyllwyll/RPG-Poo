import { Enemy } from "./Enemy";
export class Werewolf extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    setDamage(damage: number): string {
        this.setHealth(this.getCurrentHealth() - Math.round(damage * 0.5));
        return `${this.getName} reçoit ${damage} de dégat -50% de resistance => ${Math.round(damage * 0.5)}, sa health passe à ${this.getCurrentHealth}`;
    }
}
