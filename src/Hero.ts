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
                    opponent.setHealth(opponent.getHealth() - this.getStrenght() * 1.10);
                }
                else {
                    opponent.setHealth(opponent.getHealth() - this.getStrenght() * 0.9);

                }
                break
            }
            case "Human": {
                if (opponent.flying) {
                    opponent.setHealth(opponent.getHealth() - this.getStrenght() * 0.9);
                }
                else {
                    opponent.setHealth(opponent.getHealth() - this.getStrenght() * 1.10);
                }
                break
            }
            case "Dwarf": {
                opponent.setHealth(opponent.getHealth() - this.getStrenght());
                break
            }
        }
    }
}
