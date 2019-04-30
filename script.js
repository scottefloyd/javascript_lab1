"use strict";

let userHealth = 40;
let grantHealth = 10;
let wins = 0;
let name = "";

let answer = prompt("Do you want to play a game?");

if (answer.toLowerCase() === "yes") {

  let name = prompt("Great, what is your name?");

  while (userHealth > 0 && grantHealth > 0) {

    userHealth = userHealth - (Math.floor(Math.random() * 2) + 1);

    console.log(`${name}'s health level is ${userHealth}`);

    grantHealth = grantHealth - (Math.floor(Math.random() * 2) + 1);

    console.log(`Grant's health level is ${grantHealth}`);


    if (userHealth <= 0) {

      console.log("The Almighty Grant Won!");
      break;

    }

    if (grantHealth <= 0) {
      wins++;
      grantHealth = 10;
      console.log(grantHealth);


      if (wins === 3) {
        console.log(`${name} Wins!`);
        break;
      }
    }

  }


} else {

  console.log("Okay, maybe later.");

}