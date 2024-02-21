// Place all code here. 

// Task 1: Variables
let myName = "Logan"; // Replace with your own name
let myAge = 34;       // Replace with your own age

console.log("My name is " + myName + " and I am " + myAge + " years old.");

// Task 2: Data Types
let myString = "Hello!"; 
let myNumber = 30;
let myBoolean = true; 
let myNullValue = null; 
let myUndefinedVariable; 

console.log(typeof myString);   // Output: "string"
console.log(typeof myNumber);   // Output: "number"
console.log(typeof myBoolean);  // Output: "boolean"
console.log(typeof myNullValue);    // Output: "object" (special case)
console.log(typeof myUndefinedVariable); // Output: "undefined"

// Task 3: Operators
let sum = 10 + 25;
let quotient = 50 / 5;
let remainder = 13 % 5; 
let isEqual = 8 == 8;

console.log(sum);           // Output: 35
console.log(quotient);      // Output: 10
console.log(remainder);     // Output: 3 
console.log("Are the numbers equal? " + isEqual); // Output: Are the numbers equal? true

// Task 4: Conditionals
const drivingAge = 16; 

if (myAge >= drivingAge) {
  console.log("You are old enough to drive!");
} else if (myAge < 10) {
  console.log("Too young to drive... try a tricycle?");
} else {
  console.log("Not old enough to drive yet.");
}

// Optional Challenge: Expanded Conditionals
const legalDrivingAge = 16;
const learnersPermitAge = 15;

if (myAge >= legalDrivingAge) {
  console.log("You are old enough to drive!");
} else if (myAge  >= learnersPermitAge) {
  console.log("Eligible for a learner's permit");
} else if (myAge < 10) {
  console.log("Too young to drive... maybe try a tricycle?");
} else {
  console.log("Not old enough to drive yet.");
}

// Optional Challenge: Simple Guessing Game
let secretNumber = 7; // You can change this
let guess = Number(prompt("Guess a number between 1 and 10: ")); 

if (guess === secretNumber) {
  console.log("You guessed correctly!");
} else if( guess <= 6 ) {
  console.log("Too low. Try again.");
} else if (guess >= 8) {
  console.log("Too high. Try again.");
}
 else {
  console.log("Incorrect. Try again.");
}