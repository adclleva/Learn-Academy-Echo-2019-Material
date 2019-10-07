// Challenges
// Make sure you try different options and change the variables to ensure properly working code.
//
// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
const itemPrice = 99.999
const budget = 100

if (itemPrice > budget) {
  console.log("Not in budget.")
} else if (itemPrice < budget) {
  console.log("In budget")
} else {
  console.log("something went wrong")d
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
const hungryState = false;

if (hungryState) {
  console.log("Keep coding!")
} else if (itemPrice < budget) {
  console.log("Eat food!")
} else {
  console.log("something went wrong")
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
const trafficLight = "yellow"

switch(trafficLight.toLocaleLowerCase()) {
  case "green":
    console.log("Go")
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("something went wrong")
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
const num1 = 32;
const num2 = 44;

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else if (num1 === num2) {
  console.log(num1);
} else {
  console.log("something went wrong")
}
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
// It's important to note that 0 is an even number.
const randomNum = -21;

if (randomNum % 2 === 0) {
  console.log("even");
} else if (randomNum % 2 === 1 || randomNum % 2 === -1) {
  console.log("odd");
} else {
  console.log("something went wrong")
}

// Stretch Challenges
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available.
const grade = 32;

if (grade === 100) {
  console.log("Perfect Score!");
} else if (grade < 100 && grade >= 90) {
  console.log('A');
} else if (grade < 90 && grade >= 80) {
  console.log('B');
} else if (grade < 80 && grade >= 70) {
  console.log('C');
} else if (grade < 70 && grade >= 60) {
  console.log('D');
} else if (grade < 60 && grade > 0) {
  console.log('F');
} else if (grade === 0) {
  console.log("No grade available");
} else {
  console.log("something went wrong")
}
/* Write an if/else statement that takes a variable of a boolean,
number, or string datatype and logs the data type of the variable
HINT: use the JS operator typeof. */
const someData = false;

console.log(typeof someData);

// Epic Challenge
/* Create a password checker using a single if/else statement.
If a user inputs a password with 12 or more characters AND the password includes !,
then log "That is a mighty strong password".
 If the user’s password is equal to 8 or more characters OR includes !,
then log "that password is strong enough!".
Log "password is not strong enough" for every other input. */

const password = "4!@2";

if (password.length >= 12 && password.includes("!")) {
  console.log("That is a mighty strong password");
} else if (password.length >= 8 || password.includes("!")) {
  console.log("that password is strong enough!")
} else {
  console.log("password is not strong enough")
}
