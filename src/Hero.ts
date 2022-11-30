import { Chacactere } from "./Charactere";

export class Hero extends Chacactere {
    private race: string


    constructor(name: string, health: number, strenght: number, lvl: number, xp: number) {
        super(name, health, strenght, lvl, xp);
        
    }

    getRace(){
        return this.race
    }
    setRace(race:string){
        this.race=race
    }
}

