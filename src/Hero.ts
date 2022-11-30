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
}

