
import { Enemy } from "./Enemy";
import { Hero } from "./Hero";

export class Battle {
    Hero: Hero
    opponent: Enemy
    round: number
    heroRound: boolean
    stat: []


    constructor(Hero: Hero, opponent: Enemy, round: number, heroRound: boolean, stat: []) {
        this.Hero = Hero
        this.opponent = opponent
        this.round = round
        this.heroRound = heroRound
        this.stat = stat
    }




}


