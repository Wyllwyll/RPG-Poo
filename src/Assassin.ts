import { Character } from "./Character";
import { Enemy } from "./Enemy";
export class Assassin extends Enemy {
    private round:number;
    constructor(name: string, health: number, strength: number) {
        super(name, health, strength);
        this.round = 0;
    }
    attack(opponent: Character): string {
        opponent.setDamage(this.getStrength() *this.getLvl()* (Math.pow(1.1,this.round)));
        this.round+=1;
        return `${this.getName()} attaque ${opponent.getName()} avec Strengh * lvl * bonus de niveau ${this.round}=>
         ${this.getStrength() * this.getLvl() * Math.pow(1.1,this.round-1)}`
    }
}