import { Character } from "./Character";

export class Enemy extends Character {
    race: string;
    getRace(): string {
        return this.race;
    }
}