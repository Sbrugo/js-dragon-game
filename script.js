//experience points with initial value of 0
let xp = 0;
//health with initial value of 100
let health = 100;
//gold with initial value of 50
let gold = 50;
//current weapon initial value
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//DOM elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

//buttons events 
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//functions
function goStore(){
    text.innerHTML = "Going to store...";
    button1.innerHTML = "Buy 10 health (-10 gold)";
    button2.innerHTML = "Buy weapon (-30 gold)";
    button3.innerHTML = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}
function goCave(){
    text.innerHTML = "Going to cave...";
    button1.innerHTML = "Fight monster";
    button2.innerHTML = "Go to town square";
    button3.innerHTML = "Go to store";
    button1.onclick = fightDragon;
    button2.onclick = goTown;
    button3.onclick = goStore;
}
function fightDragon(){
    text.innerHTML = "Fighting dragon!";
    button1.innerHTML = "Attack";
    button2.innerHTML = "Run";
    button3.innerHTML = "Go to cave";
    button1.onclick = attack;
    button2.onclick = run;
    button3.onclick = goCave;
}
function buyHealth(){
    if(gold >= 10){
        gold -= 10;
        health += 10;
        goldText.innerHTML = gold;
        healthText.innerHTML = health;
    }
    if(gold <= 0){
        text.innerHTML = "You don't have enough gold!";
    }
}
function buyWeapon(){
    if(gold >= 30){
        gold -= 30;
        inventory.push("sword");
        goldText.innerHTML = gold;
    }
}
function goTown(){
    text.innerHTML = "Going to town square...";
    button1.innerHTML = "Go to store";
    button2.innerHTML = "Go to cave";
    button3.innerHTML = "Go to dragon's lair";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
}
function attack(){
    if(inventory.includes("sword")){
        text.innerHTML = "You attack the dragon!";
    }
}