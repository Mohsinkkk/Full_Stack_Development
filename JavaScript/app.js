1.0 Introduction
What is JavaScript?
JavaScript is a programming language used to make websites interactive.
(JavaScript ek programming language hai jo websites ko interactive banane ke kaam aati hai.)

✅ It runs inside the browser (like Chrome, Firefox).
✅ It can also run outside the browser using Node.js.

Install VS Code
VS Code is a free code editor where we can write and run JavaScript code.
(VS Code ek free code editor hai jisme hum JavaScript likh sakte hain.)

🔗 Download: https://code.visualstudio.com/
✅ Install and open it.

Install Node.js
Node.js allows us to run JavaScript outside the browser (on our computer).
(Node.js humein JavaScript ko browser ke bahar run karne ki permission deta hai.)

🔗 Download: https://nodejs.org/
✅ Install it.

Check if Node.js is installed

node -v   # Shows Node.js version
Agar Node.js correctly install hua hai, toh version show hoga.

2.0 Node Commands in Terminal
Opening Terminal in VS Code
🔹 Press Ctrl + ` (backtick) to open the terminal.

Running a JavaScript File
📌 Step 1: Create a new file → app.js
📌 Step 2: Write this code inside:
console.log("Hello, JavaScript!");
📌 Step 3: Run the file in terminal:

node app.js
✅ Output:

Hello, JavaScript!
Killing a Running Process
Agar script run ho rahi hai aur aapko stop karna hai:

Ctrl + C

3.0 Variables in JavaScript

✅Hello World Example

console.log("Hello World!");
Variables in JavaScript
Variables store values.
(Variables ek container ki tarah hote hain jo values store karte hain.)

✅Types of Variables:
var – Old way (Not recommended)
let – Can change (mutable)
const – Cannot change (immutable)
Example

let name = "Mohsin";  // Variable with let
const age = 22;       // Constant variable
console.log(name, age);
Code Comments
🔹 // for single-line comments
🔹 /* */ for multi-line comments
Example
// This is a single-line comment

/*
   This is a multi-line comment
*/
4.0 JavaScript Data Types (Deep Dive)
✅JavaScript me 7 main data types hote hain, but here are 4 important ones:

1️⃣ Strings (Text-based data)
Strings text ko store karte hain aur "double quotes" ya 'single quotes' me likhte hain.
(Example: "Hello" ya 'JavaScript')

Example
let greeting = "Hello, World!";
let name = 'Mohsin';
console.log(greeting, name);
✅ Common String Operations

let str = "JavaScript";
console.log(str.length);        // Length of string
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.includes("Script")); // Check if "Script" exists in string
console.log(str.replace("Java", "Type")); // Replace part of string

2️⃣ Numbers (Numeric Data)
Numbers mathematical values ko represent karte hain.
(Example: 10, 3.14, -5, 0xFF)

Example
let num1 = 42;
let num2 = 3.14;
let negativeNum = -10;
console.log(num1, num2, negativeNum);
✅ Basic Arithmetic Operations

let a = 10, b = 4;
console.log(a + b);  // Addition (14)
console.log(a - b);  // Subtraction (6)
console.log(a * b);  // Multiplication (40)
console.log(a / b);  // Division (2.5)
console.log(a % b);  // Modulus (Remainder) (2)

3️⃣ Arrays (Lists of Values)
Arrays multiple values store karne ke liye use hote hain.
(Example: [1, 2, 3, 4], ["Apple", "Banana", "Mango"])

Example
let numbers = [10, 20, 30, 40];
let fruits = ["Apple", "Banana", "Mango"];
console.log(numbers, fruits);
✅ Common Array Methods

let arr = [1, 2, 3, 4, 5];
arr.push(6);      // Add at end
arr.pop();        // Remove last item
arr.shift();      // Remove first item
arr.unshift(0);   // Add at start
console.log(arr.includes(3)); // Check if value exists
console.log(arr.indexOf(3));  // Get index of value

4️⃣ Objects (Key-Value Pairs)
Objects key-value pairs me data store karte hain.
(Example: {name: "Mohsin", age: 22})

Example
let person = {
    name: "Mohsin",
    age: 22,
    city: "Delhi"
};
console.log(person);
console.log(person.name);  // Accessing property
✅ Adding & Removing Properties

person.country = "India";  // Adding new property
delete person.city;        // Removing property
console.log(person);

5.0 Recap
✅ JavaScript is a programming language for web development.
✅ Variables store data (let, const).
✅ JavaScript has different data types: String, Number, Array, Object, Null, Undefined, Boolean.

6.0 Logic and Operators
✅Operators in JavaScript

let a = 10, b = 5;
console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Remainder

✅Logical Operators

console.log(true || false);  // OR (true)
console.log(true && false);  // AND (false)

7.0 Conditional Statements

✅If-Else Statement

let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

8.0 Loops in JavaScript

✅For Loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

9.0 Functions in JavaScript

✅Creating a Function

function greet() {
    console.log("Hello, world!");
}
greet();


🎯 Final Recap
✅ Variables store values (let, const).
✅ Data Types: String, Number, Array, Object.
✅ Operators: +, -, *, /, %, &&, ||.
✅ Conditional Statements: if-else.
✅ Loops: for, while.
✅ Functions: Regular & Arrow functions.