"use strict";

let userHealth = 40;
let grantHealth = 10;
let wins = 0;
let name = "";
let damageAmount = null;
let userDamage = 0;
let attackDecision = "";

function startGame() {

  let answer = prompt("Do you want to play a game?");

  if (answer.toLowerCase() === "yes") {

    name = prompt("Great, what is your name?");
    startCombat();

  }

}

function getDamage() {

  return Math.floor(Math.random() * 5) + 1;

}

function startCombat() {

  while (userHealth > 0 && grantHealth > 0) {

    userDamage = getDamage();

    userHealth = userHealth - userDamage;

    console.log(`${name} suffered ${userDamage} damage and health is now ${userHealth}`);

    userDamage = getDamage();

    grantHealth = grantHealth - userDamage;

    console.log(`Grant suffered ${userDamage} damage and health is now ${grantHealth}`);

    if (userHealth <= 0) {

      console.log("The Almighty Grant Won!");
      break;

    }

    if (grantHealth <= 0) {
      wins++;
      grantHealth = 10;

      if (wins === 3) {
        console.log(`${name} Wins!`);
        break;
      }
    }

    attackOption();

    function attackOption() {

      attackDecision = prompt("Would you like to attack or quit?");

    }

    if (attackDecision === "attack") {
      continue;
    } else if (attackDecision === "quit") {
      return;
    } else if (attackDecision === "") {
      console.log("Please enter a valid value");
      attackOption();
      
    } else {
      return;
    }

  }

}


startGame();