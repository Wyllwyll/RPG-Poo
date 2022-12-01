import { Character } from "./Character";
export class Hero extends Character {
    private race: string;
    constructor(name: string, health: number, strenght: number, race: string) {
        super(name, health, strenght);
        this.race=race
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
                    opponent.setDamage(this.getStrength() * 1.10);
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl()
                }
                else {
                    opponent.setDamage(this.getStrength() * 0.9);
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl()
                }
                
            }
            case "Human": {
                if (opponent.flying) {
                    opponent.setDamage(this.getStrength() * 0.9);
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl()
                }
                else {
                    opponent.setDamage(this.getStrength() * 1.10);
                    return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl()
                }
                
            }
            case "Dwarf": {
                opponent.setDamage(this.getStrength());
                return this.getName() + " attaque " + opponent.getName() + " avec Strengh * lvl=> " + this.getStrength() * this.getLvl()
                
            }
        }
    }
    setDamage(damage: number): void {
        if (this.race == "Dwarf" && (Math.random() * 100) <= 20) {
            this.setHealth(this.getCurrentHealth() - damage / 2);
        }
        else {
            this.setHealth(this.getCurrentHealth() - damage);
        }
    }
}
