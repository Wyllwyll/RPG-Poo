import { Enemy } from "./enemy";
export class Berserker extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    setDamage(damage: number): void {
        console.log("protection 30%: degat recus: ", damage*0.7);
        this.setHealth(this.getCurrentHealth() - damage * 0.7);
    }
}