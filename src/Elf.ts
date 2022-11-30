import { Character } from "./Character";
import { Hero } from "./Hero";

export class Elf extends Hero {
    constructor(name: string, health: number, strenght: number) {
        super(name, health, strenght)
    }
    attack(opponent: Character) {
        if (opponent.flying) {
            opponent.setHealth(opponent.getHealth() - this.getStrenght() * 1.10);
        }
        else {
            opponent.setHealth(opponent.getHealth() - this.getStrenght() * 0.9);
        }
    }

}