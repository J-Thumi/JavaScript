// 


for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

//   And you can omit expression 1 (like when your values are set before the loop starts):
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

// Expression 3 can also be omitted (like when you increment your values inside the loop):
let j = 0;
let le = cars.length;
let tex = "";
for (; j < le; ) {
  tex += cars[i] + "<br>";
  j++;
}




var k = 5;
for (var k = 0; k < 10; j++) {
  // some code
}
// Here i is 10
let l = 5;
for (let l = 0; l < 10; l++) {
  // some code
}
// Here i is 5
// In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

// In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

// When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.


                    //The For In Loop

for (key in object) {
 // code block to be executed
  }
//example
  const person = {fname:"John", lname:"Doe", age:25};
let textt = "";
for (let x in person) {
  text += person[x];
}
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

//in arrays
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

//Array.forEach()
const numberss = [45, 4, 9, 16, 25];
let txtt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txtt += value;
}
// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself

// The example above uses only the value parameter. It can be rewritten to:
const nubers = [45, 4, 9, 16, 25];
let txxt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txxt += value;
}



                    //The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
for (variable of iterable) {
    // code block to be executed
  }

//   variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
// iterable - An object that has iterable properties.
const cars = ["BMW", "Volvo", "Mini"];

let texttt = "";
for (let x of cars) {
  texttt += x;
}

let language = "JavaScript";

let a = "";
for (let x of language) {
a += x;
}


// The destructuring assignment syntax unpack object properties into variables:
let {fistName, latName} = person;
// It can also unpack arrays and any other iterables:
let [fstName, ltName] = person;
// The order of the properties does not matter:
// Destructuring is not destructive.
// Destructuring does not change the original object.
//For potentially missing properties we can set default values:
const persn = {
    firstNam: "John",
    lastNam: "Doe",
    age: 50
  };
  // Destructuring
  let {firstNam, lastNam, country = "US"} = persn;
//   Object Property Alias
let {lastNam : name} = person;

// String Destructuring
let nam = "W3Schools";
// Destructuring
let [a1, a2, a3, a4, a5] = nam;
// Destructuring can be used with any iterables.


const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let [fruit1, fruit2] = fruits;
let [fruit8,,,fruit7] = fruits;
let {[0]:fruit ,[1]:fruit9} = fruits;
const [fruit5,b, ...rest] = fruits


let first = "John";
let last = "Doe";
// Destructing
[first, last] = [last, first];