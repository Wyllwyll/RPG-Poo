//console.log("template de base typescript");

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Berserker } from "./Berserker"
import { Dragon } from "./Dragon"
import { Golem } from "./Golem"
import { griffin } from "./Griffin"
import { Hero } from "./Hero"
import { Werewolf } from "./Werewolf"



const humain = new Hero("humainTest", 100, 15, "Human")
const elf = new Hero("elfTest", 100, 15, "Elf")
const nain = new Hero("testDwarf", 90, 15, "Dwarf")

let heroPlayer:any []=[]

const selectHero = document.getElementById("selectHeros")

selectHero.addEventListener("change", function (e) {
    console.log(e);
    const who=(e.target as HTMLInputElement).value
    heroPlayer.push(who)
    console.log(heroPlayer);
})







const drake = new Dragon("TestDragon", 200, 30)
const gol = new Golem("testGolem", 150, 20)
const ass = new Assassin("testAssassin", 100, 15)
const bers = new Berserker("testBerserker", 110, 20)
const grif = new griffin("testGriffon", 170, 25)
const loup = new Werewolf("testWerewolf", 170, 20)


let enemyPlayer:any []=[]











