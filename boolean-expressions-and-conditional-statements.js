/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const hasHelp = false;  // no help in mountains 
const hasMagic = true; //wizard know magic

console.log("Now that you've chosen your path: \nIn mountains you can pick:\tmagic Carpet \tor \tmagic Wand.\nIn village you can pick:\thorse \tor \twizard .");

const choice2= readline.question("What did you pick?");

if (choice2 === "magic carpet" && hasMagic) {
  console.log("You fly to the castle.");
} 
else if (choice2 === "magic wand" || !hasMagic) {
  console.log("You don't know spell to use the Magic Wand. Walk to castle.");
} 
else if (choice2 === "magic wand" && hasHelp) {
  console.log("With help, you cast a spell and open a portal to the castle!");
}
else if (choice2 === "wizard" && hasMagic) {
  console.log("You use your resources to go to the castle.");
} 
else if (choice2 === "horse" && hasMagic) {
  console.log("Go to the Castle!");
}
else{
  console.log("The princess is still waiting to be saved!");
}