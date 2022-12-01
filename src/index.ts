//console.log("template de base typescript");

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Dragon } from "./Dragon"
import { Hero } from "./Hero"


const So = new Hero("So", 100, 20, "Dwarf")

const croissant = new Dragon("croissant", 100, 10)

const batailleSimplon = new Battle(So,croissant)


batailleSimplon.toDeath()