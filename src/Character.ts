export class Character {
    private name: string;
    private health: number;
    private currentHealth: number
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
        this.name = name
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
    attack(opponent: Character): string {
        opponent.setDamage(this.getStrength()*this.getLvl());
        return `${this.getName()} attaque ${opponent.getName()} avec Strengh * lvl=> ${this.getStrength() * this.getLvl()}`;
    }
    die(): string {
        return "bye bye " + this.getName();
    }
    isAlive(): boolean {
        if (this.getCurrentHealth() <= 0) {
            console.log(this.getName(),"est mort");
            
            return false
        }
        else {
            console.log(this.getName()," encore vivant");
            
            return true
        }
    }
    setDamage(damage: number): void {
        console.log("degat reçu",damage);
        this.setHealth(this.getCurrentHealth() - damage);
    }
    raiseXp(xp: number): void {
        console.log("gain d'experience :",xp);
        
        if ((this.getXp() + xp) >= 10) {
            console.log("gain de niveau !!");
            
            this.setXp(this.getXp() + xp - 10);
            this.setLvl(this.getLvl() + 1);
            console.log("nouveau niveau :",this.getLvl());

        } else {
            this.setXp(this.getXp() + xp);
            console.log("experience actuelle :",this.getXp());
            
        }
    }
}