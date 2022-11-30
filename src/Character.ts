export class Character {
    private name: string;
    private health: number;
    private strength: number;
    private lvl: number;
    private xp: number;
    flying: boolean;
    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.lvl = 1;
        this.xp = 0;
        this.flying = false;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name
    }
    getHealth(): number {
        return this.health
    }
    setHealth(health: number): void {
        this.health = health
    }
    getStrength(): number {
        return this.strength
    }
    setStrength(strength: number): void {
        this.strength = strength
    }
    getLvl(): number {
        return this.lvl
    }
    setLvl(lvl: number): void {
        this.lvl = lvl
    }
    getXp(): number {
        return this.xp
    }
    setXp(xp: number): void {
        this.xp = xp
    }
    attack(opponent: Character): void {
        opponent.setHealth(opponent.getHealth() - this.getStrength());
    }
    die() {
        return "bye bye " + this.name;
    }
    setDamage(damage: number): void {
        this.setHealth(this.getHealth() - damage);
    }
    raiseXp(xp: number): void {
        if ((this.getXp() + xp) >= 10) {
            this.setXp(this.getXp()+xp-10);
            this.setLvl(this.getLvl()+1);
        }else{
            this.setXp(this.getXp()+xp);
        }
    }
}