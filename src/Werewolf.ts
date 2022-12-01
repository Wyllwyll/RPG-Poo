import { Enemy } from "./Enemy";
export class Werewolf extends Enemy {
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
    }
    setDamage(damage: number): void {
        console.log("protection 50%: degat recus: ", damage*0.5);
        this.setHealth(this.getCurrentHealth() - damage * 0.5);
    }
}
