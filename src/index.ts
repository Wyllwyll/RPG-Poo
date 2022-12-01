//console.log("template de base typescript");

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Berserker } from "./Berserker"
import { Dragon } from "./Dragon"
import { Golem } from "./Golem"
import { Hero } from "./Hero"
import { Werewolf } from "./Werewolf"


const So = new Hero("So", 100, 15, "Elf")

const croissant = new Dragon("croissant", 200, 30)

const batailleSimplon = new Battle(So,croissant)


batailleSimplon.toDeath()