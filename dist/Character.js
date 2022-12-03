"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.currentHealth = health;
        this.strength = strength;
        this.lvl = 1;
        this.xp = 0;
        this.flying = false;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.currentHealth = health;
    }
    getCurrentHealth() {
        return this.currentHealth;
    }
    getStrength() {
        return this.strength;
    }
    setStrength(strength) {
        this.strength = strength;
    }
    getLvl() {
        return this.lvl;
    }
    setLvl(lvl) {
        this.lvl = lvl;
    }
    getXp() {
        return this.xp;
    }
    setXp(xp) {
        this.xp = xp;
    }
    attack(opponent) {
        opponent.setDamage(this.getStrength() * this.getLvl());
        return `${this.getName()} attaque ${opponent.getName()} avec Strengh * lvl=> ${this.getStrength() * this.getLvl()}`;
    }
    die() {
        return "bye bye " + this.getName();
    }
    isAlive() {
        if (this.getCurrentHealth() <= 0) {
            console.log(this.getName(), "est mort");
            return false;
        }
        else {
            console.log(this.getName(), " encore vivant");
            return true;
        }
    }
    setDamage(damage) {
        console.log("degat infligé", damage);
        this.setHealth(this.getCurrentHealth() - damage);
    }
    raiseXp(xp) {
        console.log("gain d'experience :", xp);
        if ((this.getXp() + xp) >= 10) {
            console.log("gain de niveau !!");
            this.setXp(this.getXp() + xp - 10);
            this.setLvl(this.getLvl() + 1);
            console.log("nouveau niveau :", this.getLvl());
        }
        else {
            this.setXp(this.getXp() + xp);
            console.log("experience actuelle :", this.getXp());
        }
    }
}
exports.Character = Character;
