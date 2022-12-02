

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Berserker } from "./Berserker"
import { Dragon } from "./Dragon"
import { Enemy } from "./Enemy"
import { Golem } from "./Golem"
import { griffin } from "./Griffin"
import { Hero } from "./Hero"
import { cLog } from "./log"
import { Werewolf } from "./Werewolf"

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let race: Hero
let nameChoice: string;
let heroPlayer: any[] = []
const selectHero = document.getElementById("selectHeros")
const arrayHero: any[] = []
let playerRace: any[] = [];
const subName = document.getElementById('chooseName');
const clickName = document.getElementById('button-addon2');
const subMit = document.getElementById('submit');

arrayHero.push("Elf", "Human", "Dwarf")

console.log("tesssst");

cLog("test","bob")

subName.addEventListener('submit', (e) => {
    e.preventDefault();
    nameChoice = e.target[0].value;
    console.log(nameChoice);
    clickName.classList.add('disabled');
    subMit.setAttribute('readonly', '');

})

clickName.addEventListener('click', (e) => {
    nameChoice = (e.target as HTMLInputElement).offsetParent[0].value;
    console.log(nameChoice);
    clickName.classList.add('disabled');
    subMit.setAttribute('readonly', '');
})


selectHero.addEventListener("change", function (e) {
    console.log(e);
    const who = (e.target as HTMLInputElement).value;
    playerRace.push(who);
    switch (who) {
        case 'Elf': race = new Hero(`${nameChoice}`, 100, 20, "Elf");

            break;

        case 'Human': race = new Hero(`${nameChoice}`, 100, 15, "Human");
            break;

        case 'Dwarf': race = new Hero(`${nameChoice}`, 100, 20, "Dwarf");
    }
    console.log(race);

});


console.log(heroPlayer);


function pushHero(): void {
    for (let i = 0; i < arrayHero.length; i++) {
        const nextOption = document.createElement("option")
        selectHero.appendChild(nextOption);
        nextOption.textContent = arrayHero[i]
    }
}
pushHero()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arrayEnemies: any[] = []
const selectEnemies = document.getElementById("selectEnemies")
let enemy: Enemy
let enemyPlayer: any[] = []

arrayEnemies.push("Dragon", "Berserker", "Golem", "Assassin", "Griffin", "Werewolf")

selectEnemies.addEventListener("change", function (e) {
    console.log(e);
    const who = (e.target as HTMLInputElement).value
    enemyPlayer.push(who)
    console.log(enemyPlayer);

})

selectEnemies.addEventListener('change', (e) => {
    const wich = (e.target as HTMLInputElement).value;
    enemyPlayer.push(wich);

    switch (wich) {
        case 'Assassin': enemy = new Assassin('Sram', 110, 12);

            break;
        case 'Berserker': enemy = new Berserker('Sacrieur', 110, 20);

            break;

        case 'Dragon': enemy = new Dragon('Efrim', 200, 30);

            break;

        case 'Golem': enemy = new Golem('Golem de fer', 125, 15);

            break;

        case 'Griffin': enemy = new griffin('Griffon en mousse', 120, 20);

            break;

        case "Werewolf": enemy = new Werewolf("Loup perdu", 150, 25)

            break;
    }
    console.log(enemy);

});



function pushEnemy(): void {
    for (let i = 0; i < arrayEnemies.length; i++) {
        const nextOption = document.createElement("option");
        selectEnemies.appendChild(nextOption);
        nextOption.textContent = arrayEnemies[i];
        ;

    }
}


pushEnemy();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fight = document.getElementById("fight")

fight.addEventListener("click", () => {

    let bataille = new Battle(race, enemy)
    bataille.toDeath();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////