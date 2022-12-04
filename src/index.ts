

import { Assassin } from "./Assassin"
import { Battle } from "./Bataille"
import { Berserker } from "./Berserker"
import { Dragon } from "./Dragon"
import { Enemy } from "./Enemy"
import { Golem } from "./Golem"
import { griffin } from "./Griffin"
import { Hero } from "./Hero"
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
const hero = document.getElementById("hero")
const enemie = document.getElementById("enemie")

arrayHero.push("Elf", "Human", "Dwarf")

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
            hero.setAttribute("src","./img/elf-removebg-preview.png");
            hero.setAttribute("class","col");
            break;

        case 'Human': race = new Hero(`${nameChoice}`, 100, 15, "Human");
        hero.setAttribute("src","./img/humain-removebg-preview.png");
        hero.setAttribute("class","col");
            break;

        case 'Dwarf': race = new Hero(`${nameChoice}`, 100, 20, "Dwarf");
        hero.setAttribute("src","./img/Dwarf-removebg-preview.png");
        hero.setAttribute("class","col");
        

    }
});



function pushHero(): void {
    for (let i = 0; i < arrayHero.length; i++) {
        const nextOption = document.createElement("option")
        selectHero.appendChild(nextOption);
        nextOption.textContent = arrayHero[i]
    }
}
pushHero();
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
})

selectEnemies.addEventListener('change', (e) => {
    const wich = (e.target as HTMLInputElement).value;
    enemyPlayer.push(wich);

    switch (wich) {
        case 'Assassin': enemy = new Assassin('Sram', 110, 12);
        enemie.setAttribute("src","./img/assassins-removebg-preview.png");
        enemie.setAttribute("class","col");
            break;
        case 'Berserker': enemy = new Berserker('Sacrieur', 110, 20);
        enemie.setAttribute("src","./img/berserker-removebg-preview.png");
        hero.setAttribute("class","col");
            break;

        case 'Dragon': enemy = new Dragon('Efrim', 200, 30);
        enemie.setAttribute("src","./img/dragon-removebg-preview.png");
        enemie.setAttribute("class","col");
            break;

        case 'Golem': enemy = new Golem('Golem de fer', 125, 15);
        enemie.setAttribute("src","./img/golem-removebg-preview.png");
        enemie.setAttribute("class","col");
            break;

        case 'Griffin': enemy = new griffin('Griffon en mousse', 120, 20);
        enemie.setAttribute("src","./img/griffon-removebg-preview.png");
        enemie.setAttribute("class","col");
            break;

        case "Werewolf": enemy = new Werewolf("Loup perdu", 150, 25)
        enemie.setAttribute("src","./img/Werewolf-removebg-preview.png");
        enemie.setAttribute("class","col");
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

const conteneurStat = document.getElementById("stat");

fight.addEventListener("click", () => {

    let bataille = new Battle(race, enemy);

    bataille.toDeath();

    for (let i = 0; i < bataille.stat.length; i++) {
        let ligne = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let colonne = document.createElement("td");
            colonne.textContent = bataille?.formatedStat[i]?.[j];
            ligne.appendChild(colonne);
        }
        conteneurStat.appendChild(ligne);
    }
    
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


