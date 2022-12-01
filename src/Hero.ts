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
    attack(opponent: Character): void {
        switch (this.race) {
            case "Elf": {
                if (opponent.flying) {
                    opponent.setDamage(this.getStrength() * 1.10);
                }
                else {
                    opponent.setDamage(this.getStrength() * 0.9);
                }
                break;
            }
            case "Human": {
                if (opponent.flying) {
                    opponent.setDamage(this.getStrength() * 0.9);
                }
                else {
                    opponent.setDamage(this.getStrength() * 1.10);
                }
                break;
            }
            case "Dwarf": {
                opponent.setDamage(this.getStrength());
                break;
            }
        }
    }
    setDamage(damage: number): void {
        if (this.race == "Dwarf" && (Math.random() * 100) <= 20) {
            this.setHealth(this.getHealth() - damage / 2);
        }
        else {
            this.setHealth(this.getHealth() - damage);
        }
    }
}
