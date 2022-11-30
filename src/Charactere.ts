export class Chacactere {
    private name: string
    private health: number
    private strenght: number
    private lvl: number
    private xp: number



    constructor(name: string, health: number, strenght: number, lvl: number, xp: number) {
        this.name = name
        this.health = health
        this.strenght = strenght
        this.lvl = lvl
        this.xp = xp
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

    attack(opponent: Chacactere) {
        opponent.setHealth(opponent.getHealth() - this.getStrenght());
    }


    die() {
        console.log("bye bye "+ this.name);

    }





}