export class Character {
    private name: string;
    private health: number;
    private currentHealth: number;
    private strength: number;
    private lvl: number;
    private xp: number;
    flying: boolean;
    constructor(name: string, health: number, strength: number) {
        this.name = name;
        this.health = health;
        this.currentHealth = health;
        this.strength = strength;
        this.lvl = 1;
        this.xp = 0;
        this.flying = false;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getHealth(): number {
        return this.health;
    }
    setHealth(health: number): void {
        this.currentHealth = health;
    }
    getCurrentHealth(): number {
        return this.currentHealth;
    }
    getStrength(): number {
        return this.strength;
    }
    setStrength(strength: number): void {
        this.strength = strength;
    }
    getLvl(): number {
        return this.lvl;
    }
    setLvl(lvl: number): void {
        this.lvl = lvl;
    }
    getXp(): number {
        return this.xp;
    }
    setXp(xp: number): void {
        this.xp = xp;
    }
    attack(opponent: Character): string {
        let returnDamage = opponent.setDamage(this.getStrength() * this.getLvl());
        return `attaque avec Strengh * lvl=> ${this.getStrength() * this.getLvl()}. ${returnDamage}`;
    }
    die(): string {
        return `... bye bye ${this.getName()}`;
    }
    isAlive(): boolean {
        if (this.getCurrentHealth() <= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    setDamage(damage: number): string {
        this.setHealth(this.getCurrentHealth() - damage);
        return `${this.getName()} reçoit ${damage} de dégat, sa health passe à ${this.getCurrentHealth()}`;
    }
    raiseXp(xp: number): string {
        let returnXp: string;
        if ((this.getXp() + xp) >= 10) {
            this.setXp(this.getXp() + xp - 10);
            this.setLvl(this.getLvl() + 1);
            returnXp = `${this.getName()} gagne un Level : Lvl ${this.getLvl()}`;
        } else {
            this.setXp(this.getXp() + xp);
            returnXp = `l'XP de ${this.getName()} augmente de ${xp}`;
        }
        return returnXp;
    }
    regeneration(health: number): string {
        this.setHealth(this.getCurrentHealth() + Math.round(0.1 * health));
        if (this.getCurrentHealth() > this.getHealth()) {
            this.setHealth(this.getHealth());
            return `et revient à son maximun ${this.getHealth()}`;
        }
        return `${health}/100*10 = ${Math.round(0.1 * health)}`;
    }
}