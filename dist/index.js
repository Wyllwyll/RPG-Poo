(()=>{var o=class{constructor(e,t,r){this.name=e,this.health=t,this.currentHealth=t,this.strength=r,this.lvl=1,this.xp=0,this.flying=!1}getName(){return this.name}setName(e){this.name=e}getHealth(){return this.health}setHealth(e){this.currentHealth=e}getCurrentHealth(){return this.currentHealth}getStrength(){return this.strength}setStrength(e){this.strength=e}getLvl(){return this.lvl}setLvl(e){this.lvl=e}getXp(){return this.xp}setXp(e){this.xp=e}attack(e){let t=e.setDamage(this.getStrength()*this.getLvl());return`attaque avec Strengh * lvl=> ${this.getStrength()*this.getLvl()}. ${t}`}die(){return`... bye bye ${this.getName()}`}isAlive(){return!(this.getCurrentHealth()<=0)}setDamage(e){return this.setHealth(this.getCurrentHealth()-e),`${this.getName()} re\xE7oit ${e} de d\xE9gat, sa health passe \xE0 ${this.getCurrentHealth()}`}raiseXp(e){let t;return this.getXp()+e>=10?(this.setXp(this.getXp()+e-10),this.setLvl(this.getLvl()+1),t=`${this.getName()} gagne un Level : Lvl ${this.getLvl()}`):(this.setXp(this.getXp()+e),t=`l'XP de ${this.getName()} augmente de ${e}`),t}regeneration(e){return this.setHealth(this.getCurrentHealth()+Math.round(.1*e)),this.getCurrentHealth()>this.getHealth()?(this.setHealth(this.getHealth()),`et revient \xE0 son maximun ${this.getHealth()}`):`${e}/100*10 = ${Math.round(.1*e)}`}};var n=class extends o{};var g=class extends n{constructor(t,r,a){super(t,r,a);this.round=0}attack(t){let r=Math.round(this.getStrength()*this.getLvl()*Math.pow(1.1,this.round)),a=t.setDamage(r);return this.round+=1,`attaque avec Strengh * lvl et bonus de niveau ${this.round} => ${r}, sa health passe \xE0 ${this.getCurrentHealth()}. ${a}`}};var m=class{constructor(e,t){this.round=1;this.stat=[];this.hero=e,this.opponent=t}toDeath(){for(this.stat.push(`${this.hero.getRace()} vs ${this.opponent.constructor.name}`);this.hero.isAlive()&&this.opponent.isAlive();)this.round%2==1?this.stat.push(`Tour ${this.round}: ${this.hero.getName()} ${this.hero.attack(this.opponent)}`):this.stat.push(`Tour ${this.round}: ${this.opponent.getName()} ${this.opponent.attack(this.hero)}`),this.round+=1,console.log("test");this.hero.isAlive()?(this.stat.push(`... bye bye ${this.opponent.getName()}`),this.stat.push("Le combat est fini"),this.stat.push(this.hero.raiseXp(2)),this.stat.push(`${this.hero.getName()} r\xE9cupere 10% de health de ${this.opponent.getName()}, ${this.hero.regeneration(this.opponent.getHealth())}`)):(this.stat.push(`... bye bye ${this.hero.getName()}`),this.stat.push(`Le hero ${this.hero.getName()} est mort.`),this.stat.push("La partie est termin\xE9e"))}random1(){Math.floor(Math.random()*10),console.log(this.random1)}};var c=class extends n{constructor(e,t,r){super(e,t,r)}setDamage(e){return this.setHealth(Math.round(this.getCurrentHealth()-e*.7)),`${this.getName()} re\xE7oit ${e} de d\xE9gat -30% => ${Math.round(e*.7)}, sa health passe \xE0 ${this.getCurrentHealth()}`}};var d=class extends n{constructor(t,r,a){super(t,r,a);this.round=0}attack(t){switch(this.round){case 0:return this.round+=1,super.attack(t);case 1:return this.fly(),this.round+=1,"s'envole";case 2:return this.round=0,`attaque avec Strengh * lvl et un bonus de 10% => ${Math.round(this.getStrength()*this.getLvl()*1.1)}, ${this.attackfromsky(t)}`}}fly(){this.flying=!0}attackfromsky(t){return this.flying=!1,t.setDamage(Math.round(this.getStrength()*1.1*this.getLvl()))}setDamage(t){return this.flying?(this.setHealth(Math.round(this.getCurrentHealth()-Math.round(t*.4))),`${this.getName()} re\xE7oit ${t} de d\xE9gat -60% de resistance => ${Math.round(t*.4)}, sa health passe \xE0 ${this.getCurrentHealth()}`):(this.setHealth(Math.round(this.getCurrentHealth()-Math.round(t*.5))),`${this.getName()} re\xE7oit ${t} de d\xE9gat -50% de resistance => ${Math.round(t*.5)}, sa health passe \xE0 ${this.getCurrentHealth()}`)}};var p=class extends n{constructor(e,t,r){super(e,t,r)}setDamage(e){return Math.random()*100<=50?(this.setHealth(this.getCurrentHealth()-e),`${this.getName()} re\xE7oit ${e} de d\xE9gat, sa health passe \xE0 ${this.getCurrentHealth()}`):`${this.getName()} re\xE7oit ${e} de d\xE9gat mais annule les d\xE9gats, sa health reste ${this.getCurrentHealth()}`}};var f=class extends n{constructor(t,r,a){super(t,r,a);this.round=0}attack(t){switch(this.round){case 0:return this.round+=1,super.attack(t);case 1:return this.round+=1,this.fly(),"s'envole";case 2:return this.round=0,`attaque avec Strengh * lvl et un bonus de 10% => ${this.getStrength()*this.getLvl()*1.1}, ${this.attackfromsky(t)}`}}fly(){this.flying=!0}attackfromsky(t){return this.flying=!1,t.setDamage(Math.round(this.getStrength()*1.1*this.getLvl()))}setDamage(t){return this.flying?(this.setHealth(Math.round(this.getCurrentHealth()-t*.9)),`${this.getName()} re\xE7oit ${t} de d\xE9gat -10% de resistance => ${t*.9}, sa health passe \xE0 ${this.getCurrentHealth()}`):(this.setHealth(this.getCurrentHealth()-t),`${this.getName()} re\xE7oit ${t} de d\xE9gat, sa health passe \xE0 ${this.getCurrentHealth()}`)}};var u=class extends o{constructor(t,r,a,M){super(t,r,a);this.race=M}getRace(){return this.race}setRace(t){this.race=t}attack(t){let r;switch(this.race){case"Elf":return t.flying?(r=Math.round(this.getStrength()*this.getLvl()*1.1),`attaque avec Strengh * lvl et un bonus de 10% => ${r}, ${t.setDamage(r)}`):(r=Math.round(this.getStrength()*this.getLvl()*.9),`attaque avec Strengh * lvl et un malus de 10% => ${r}, ${t.setDamage(r)}`);case"Human":return t.flying?(r=Math.round(this.getStrength()*this.getLvl()*.9),`attaque avec Strengh * lvl et un malus de 10% => ${r}, ${t.setDamage(r)}`):(r=Math.round(this.getStrength()*this.getLvl()*1.1),`attaque avec Strengh * lvl et un bonus de 10% => ${r}, ${t.setDamage(r)}`);case"Dwarf":return r=this.getStrength()*this.getLvl(),`attaque avec Strengh * lvl=> ${r}, ${t.setDamage(r)}`}}setDamage(t){return this.race=="Dwarf"&&Math.random()*100<=20?(this.setHealth(this.getCurrentHealth()-Math.round(t/2)),`${this.getName()} re\xE7oit ${t} de d\xE9gat -50% => ${Math.round(t/2)}, sa health passe \xE0 ${this.getCurrentHealth()}`):(this.setHealth(this.getCurrentHealth()-t),`${this.getName()} re\xE7oit ${t} de d\xE9gat, sa health passe \xE0 ${this.getCurrentHealth()}`)}};var $=class extends n{constructor(e,t,r){super(e,t,r)}setDamage(e){return this.setHealth(this.getCurrentHealth()-Math.round(e*.5)),`${this.getName()} re\xE7oit ${e} de d\xE9gat -50% de resistance => ${Math.round(e*.5)}, sa health passe \xE0 ${this.getCurrentHealth()}`}};var l,i,k=[],E=document.getElementById("selectHeros"),v=[],D=[],w=document.getElementById("chooseName"),b=document.getElementById("button-addon2"),L=document.getElementById("submit");v.push("Elf","Human","Dwarf");w.addEventListener("submit",s=>{s.preventDefault(),i=s.target[0].value,console.log(i),b.classList.add("disabled"),L.setAttribute("readonly","")});b.addEventListener("click",s=>{i=s.target.offsetParent[0].value,console.log(i),b.classList.add("disabled"),L.setAttribute("readonly","")});E.addEventListener("change",function(s){console.log(s);let e=s.target.value;switch(D.push(e),e){case"Elf":l=new u(`${i}`,100,20,"Elf");break;case"Human":l=new u(`${i}`,100,15,"Human");break;case"Dwarf":l=new u(`${i}`,100,20,"Dwarf")}console.log(l)});console.log(k);function N(){for(let s=0;s<v.length;s++){let e=document.createElement("option");E.appendChild(e),e.textContent=v[s]}}N();var H=[],C=document.getElementById("selectEnemies"),h,y=[];H.push("Dragon","Berserker","Golem","Assassin","Griffin","Werewolf");C.addEventListener("change",function(s){console.log(s);let e=s.target.value;y.push(e),console.log(y)});C.addEventListener("change",s=>{let e=s.target.value;switch(y.push(e),e){case"Assassin":h=new g("Sram",110,12);break;case"Berserker":h=new c("Sacrieur",110,20);break;case"Dragon":h=new d("Efrim",200,30);break;case"Golem":h=new p("Golem de fer",125,15);break;case"Griffin":h=new f("Griffon en mousse",120,20);break;case"Werewolf":h=new $("Loup perdu",150,25);break}console.log(h)});function S(){for(let s=0;s<H.length;s++){let e=document.createElement("option");C.appendChild(e),e.textContent=H[s]}}S();var x=document.getElementById("fight");x.addEventListener("click",()=>{new m(l,h).toDeath()});})();