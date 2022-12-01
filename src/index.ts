//console.log("template de base typescript");

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Berserker } from "./Berserker"
import { Golem } from "./Golem"
import { Hero } from "./Hero"
import { Werewolf } from "./Werewolf"


const So = new Hero("So", 100, 20, "Elf")

const croissant = new Werewolf("croissant", 80, 10)

const batailleSimplon = new Battle(So,croissant)


batailleSimplon.toDeath()