// Part 1: JavaScript Basics
// Variables and Data Types
let name = "John Doe";  // string
let age = 25;           // number
let isStudent = true;   // boolean
let numbers = [1, 2, 3, 4, 5];  // array
let person = { name: "John", age: 25 };  // object

// Print values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Numbers: ${numbers} (Type: ${typeof numbers})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
function simpleCalculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operation = prompt("Choose an operation (+, -, *, /):");

  let result;

  // Perform the selected operation
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === '*') {
    result = num1 * num2;
  } else if (operation === '/') {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero";
    }
  } else {
    result = "Invalid operation";
  }

  alert(`Result: ${result}`);
}

// Functions: Greet User
function greetUser(name) {
  return `Hello, ${name}! Welcome to the JavaScript world.`;
}

// Part 2: JavaScript Control Structures
// If Statements: Check Voting Eligibility
function checkVotingEligibility() {
  let userAge = prompt("Enter your age to check eligibility for voting:");

  if (userAge >= 18) {
    document.body.innerHTML += `<p>You are eligible to vote!</p>`;
  } else {
    document.body.innerHTML += `<p>You are not eligible to vote yet.</p>`;
  }
}

// Loops: Display Numbers 1-10
function displayNumbers() {
  let numberList = document.getElementById("number-list");
  
  for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
  }
}

// Part 3: Introduction to the DOM
// Modify the HTML structure and elements
function manipulateDOM() {
  // Change the heading text
  document.querySelector('h1').textContent = "JavaScript in Action!";
  
  // Add new paragraph inside dynamic-content div
  let dynamicContentDiv = document.getElementById('dynamic-content');
  let newParagraph = document.createElement('p');
  newParagraph.textContent = "This content was added dynamically using JavaScript.";
  dynamicContentDiv.appendChild(newParagraph);
}

// Call functions to execute tasks
simpleCalculator();
greetUser("Alice");  // Example: Calling greetUser function with a name
checkVotingEligibility();
displayNumbers();
manipulateDOM();
