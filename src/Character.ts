export class Character {
    private name: string
    private health: number
    private strenght: number
    private lvl: number
    private xp: number
    flying: boolean



    constructor(name: string, health: number, strenght: number, lvl: number, xp: number) {
        this.name = name
        this.health = health
        this.strenght = strenght
        this.lvl = 1
        this.xp = 0
    }


    getName() {
        return this.name
    }
    setName(name: string) {
        this.name = name
    }


    getHealth() {
        return this.health
    }
    setHealth(health: number) {
        this.health = health
    }


    getStrenght() {
        return this.strenght
    }
    setStrengt(strenght: number) {
        this.strenght = strenght
    }


    getLvl() {
        return this.lvl
    }

    setLvl(lvl: number) {
        this.lvl = lvl
    }

    getXp() {
        return this.xp
    }

    attack(opponent: Character) {
        opponent.setHealth(opponent.getHealth() - this.getStrenght());
    }


    die() {
        return "bye bye " + this.name;

    }
}