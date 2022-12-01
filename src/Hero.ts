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
        let damage:number
        switch (this.race) {
            case "Elf": {
                
                if (opponent.flying) {
                    damage=Math.round(this.getStrength() * this.getLvl() * 1.1);
                    return `avec Strengh * lvl et un bonus de 10% => ${damage}, ${opponent.setDamage(damage)}`;
                }
                else {
                    damage=Math.round(this.getStrength() * this.getLvl() * 0.9);
                    return `avec Strengh * lvl et un malus de 10% => ${damage}, ${opponent.setDamage(damage)}`;
                }
            }
            case "Human": {
                if (opponent.flying) {
                    damage=Math.round(this.getStrength() * this.getLvl() * 0.9);
                    return `avec Strengh * lvl et un malus de 10% => ${damage}, ${opponent.setDamage(damage)}`;
                }
                else {
                    damage=Math.round(this.getStrength() * this.getLvl() * 1.1);
                    return `avec Strengh * lvl et un bonus de 10% => ${damage}, ${opponent.setDamage(damage)}`;
                }
            }
            case "Dwarf": {
                damage=this.getStrength() * this.getLvl()
                return `avec Strengh * lvl=> ${damage}, ${opponent.setDamage(damage)}`;
            }
        }
    }
    setDamage(damage: number): string {
        if (this.race == "Dwarf" && (Math.random() * 100) <= 20) {
            this.setHealth(this.getCurrentHealth() - Math.round(damage / 2));
            return `${this.getName} reçoit ${damage} de dégat -50% => ${Math.round(damage / 2)}, sa health passe à ${this.getCurrentHealth}`;
        }
        else {
            this.setHealth(this.getCurrentHealth() - damage);
            return `${this.getName} reçoit ${damage} de dégat, sa health passe à ${this.getCurrentHealth}`;
        }
    }
}
