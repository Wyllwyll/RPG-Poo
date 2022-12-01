import { Character } from "./Character";
import { Enemy } from "./Enemy";
export class Dragon extends Enemy {
    round: number;
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
        this.round = 0;
    }
    attack(opponent: Character): string {
        switch (this.round) {
            case 0: {
                this.round += 1;
                return super.attack(opponent);
            }
            case 1: {
                this.fly();
                this.round += 1;
                return `s'envole`;
            }
            case 2: {
                ;
                this.round = 0;
                return `attaque avec Strengh * lvl et un bonus de 10% => ${this.getStrength() * this.getLvl() * 1.1}, ${this.attackfromsky(opponent)}`;
            }
        }
    }
    fly(): void {
        this.flying = true;
    }
    attackfromsky(opponent: Character): string {
        this.flying = false;
        return opponent.setDamage(this.getStrength() * 1.1 * this.getLvl());
    }
    setDamage(damage: number): string {
        if (this.flying) {
            this.setHealth(this.getCurrentHealth() - damage * 0.4);
            return `${this.getName} reçoit ${damage} de dégat -60% de resistance => ${damage * 0.4}, sa health passe à ${this.getCurrentHealth}`;
        } else {
            this.setHealth(this.getCurrentHealth() - damage * 0.5);
            return `${this.getName} reçoit ${damage} de dégat -50% de resistance => ${damage * 0.5}, sa health passe à ${this.getCurrentHealth}`;
        }
    }
}