//console.log("template de base typescript");

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Hero } from "./Hero"


const So = new Hero("So", 100, 20, "Human")

const croissant = new Assassin("croissant", 100, 10)

const batailleSimplon = new Battle(So,croissant)


batailleSimplon.toDeath()