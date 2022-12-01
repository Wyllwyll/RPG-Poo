import { Character } from "./Character";
import { Enemy } from "./Enemy";

// declaration de la classe Assassin (sous-classe d'Enemy)
export class Assassin extends Enemy {
    private round: number;
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
        this.round = 0;
    }
    attack(opponent: Character): string {
        let damage = Math.round(this.getStrength() * this.getLvl() * (Math.pow(1.1, this.round)));
        let returnDamage = opponent.setDamage(damage);
        this.round += 1;
        return `attaque avec Strengh * lvl et bonus de niveau ${this.round} => ${damage}, sa health passe à ${this.getCurrentHealth}. ${returnDamage}`;
    }
}