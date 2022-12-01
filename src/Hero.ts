import { Character } from "./Character";
export class Hero extends Character {
    private race: string;
    constructor(name: string, health: number, strenght: number, race: string) {
        super(name, health, strenght);
        this.race = race;
    }
    getRace(): string {
        return this.race;
    }
    setRace(race: string): void {
        this.race = race;
    }
    attack(opponent: Character): string {
        switch (this.race) {
            case "Elf": {
                if (opponent.flying) {
                    return `avec Strengh * lvl et un bonus de 10% => ${this.getStrength() * this.getLvl() * 1.1}, ${opponent.setDamage(this.getStrength() * 1.1 * this.getLvl())}`;
                }
                else {
                    return `avec Strengh * lvl et un malus de 10% => ${this.getStrength() * this.getLvl() * 0.9}, ${opponent.setDamage(this.getStrength() * 0.9 * this.getLvl())}`;
                }
            }
            case "Human": {
                console.log("Human");
                if (opponent.flying) {
                    return `avec Strengh * lvl et un malus de 10% => ${this.getStrength() * this.getLvl() * 0.9}, ${opponent.setDamage(this.getStrength() * 0.9 * this.getLvl())}`;
                }
                else {
                    return `avec Strengh * lvl et un bonus de 10% => ${this.getStrength() * this.getLvl() * 1.1}, ${opponent.setDamage(this.getStrength() * 1.10 * this.getLvl())}`;
                }
            }
            case "Dwarf": {
                return `avec Strengh * lvl=> ${this.getStrength() * this.getLvl()}, ${opponent.setDamage(this.getStrength() * this.getLvl())}`;
            }
        }
    }
    setDamage(damage: number): string {
        if (this.race == "Dwarf" && (Math.random() * 100) <= 20) {
            this.setHealth(this.getCurrentHealth() - damage / 2);
            return `${this.getName} reçoit ${damage} de dégat -50% => ${damage/2}, sa health passe à ${this.getCurrentHealth}`;
        }
        else {
            this.setHealth(this.getCurrentHealth() - damage);
            return `${this.getName} reçoit ${damage} de dégat, sa health passe à ${this.getCurrentHealth}`;
        }
    }
}
