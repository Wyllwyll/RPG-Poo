import { Character } from "./Character";

export class Hero extends Character {
    private race: string


    constructor(name: string, health: number, strenght: number) {
        super(name, health, strenght);

    }

    getRace() {
        return this.race
    }
    setRace(race: string) {
        this.race = race
    }

    attack(opponent: Character): void {
        switch (this.race) {
            case "Elf": {
                if (opponent.flying) {
                    opponent.setDamage(this.getStrenght() * 1.10);
                }
                else {
                    opponent.setDamage(this.getStrenght() * 0.9);

                }
                break
            }
            case "Human": {
                if (opponent.flying) {
                    opponent.setDamage(this.getStrenght() * 0.9);
                }
                else {
                    opponent.setDamage(this.getStrenght() * 1.10);
                }
                break
            }
            case "Dwarf": {
                opponent.setDamage(this.getStrenght());
                break
            }
        }
    }

    setDamage(damage: number) {
        if (this.race == "Dwarf" && (Math.random() * 100) <= 20) {
            this.setHealth(this.getHealth() - damage / 2)
        }
        else {
            this.setHealth(this.getHealth() - damage)
        }
    }







}
