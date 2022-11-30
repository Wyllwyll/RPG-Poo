import { Character } from "./Character";

export class Hero extends Character {
    private race: string


    constructor(name: string, health: number, strenght: number, lvl: number, xp: number) {
        super(name, health, strenght, lvl, xp);

    }

    getRace() {
        return this.race
    }
    setRace(race: string) {
        this.race = race
    }
}

