// This is my first js code
console.log('Hello JavaScript');

// PRIMITIVES OR VALUE TYPES: strings, numbers, boolen, undefined, null

let name = 'Renish'; // String Literal
let lastname = 'Okago'
console.log(name);
console.log(lastname);

// Cannot be a keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen
// Are a case-sensitive

// Use let if you want the value to change/ re-assign
let interestRate = 0.5;
interestRate = 2; // Number literal
console.log(interestRate);

// Otherwise use const
const interestRet = 1.5;
console.log(interestRet);

let isApproved = false; // Boolen Literal
let firstname = undefined;
let selectedColor = null;

//DYNAMIC TYPING - type of a variable can change at runtime

// REFERENCE TYPES - objects, array, function
//object

let person = {
    name: 'Renish',
    age: 20
}

console.log(person);

// Dot Notation
person.name = 'Fabby'
console.log(person.name);

// Bracket notation
person['age'] = 19;
console.log(person['age']);


// Arrays - a data structure we use to represents a list of items
let selectedColors = ['red', 7];
selectedColors[2] = 'white';
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);

// Functions
function greet() {
    console.log('Js cool');
}

greet();

// passing parameters to the function
//perfoming a task
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

greet('Joel', 'Inyang');

// Calculates a value
function square(number) {
    return number * number;
}

console.log(square(467));
