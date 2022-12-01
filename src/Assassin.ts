import { Enemy } from "./Enemy";
export class Assassin extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
}