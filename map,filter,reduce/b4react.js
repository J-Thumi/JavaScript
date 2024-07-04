let age = 17
age<18 ? console.log("you are young") : console.log("you are old")


a=true
b=false

a && b ? console.log("you are young") : console.log("you are old")

//&& goes thru the conditions left to right until it finds a false one then it executes second part
//if no false encontered first part is executed 
//when false is encountered the other conditions are not exermined

a || b ? console.log("you are young") : console.log("you are old")

// || goes thru the conditions left to right until it finds a true one then it executes first part
//if no true encontered second part is executed 
//when true is encountered the other conditions are not exermined

//arrow functions

const squared =(x)=>{
    return x**2
}
console.log(squared(4))

//object destructuring


const person={
    name:"Joe",
    agee:27,
    isMarried : true,
}
//1.we can assign individually

let nam=person.name
let agge = person.age
let isMarriedd = person.isMarried

//2.or we can 

let { name , agee, isMarried}=person//must have same names as in the object

name === person.name ? console.log("method 1 and 2 are same") : console.log("method 1 and 2 are not same")

//person one can have all other extics same but not name so we use spread operator

const person2={...person,name:"Jack"}

const arr=[1,23,3,4,5]
const arr2=[...arr,2,3,4]
console.log(arr2)


                //rest and spread operators
// Rest Operator (...)
// When defining a function, the rest operator collects all remaining arguments into a single array parameter:
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10


  //The rest operator can be used in array destructuring to capture the remaining elements in an array:
  const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

// Similarly, in object destructuring, the rest operator can be used to capture the remaining properties of an object:
const { a, b, ...others } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);      // Output: 1
console.log(b);      // Output: 2
console.log(others); // Output: { c: 3, d: 4 }


// Spread Operator (...)
// The spread operator allows you to expand an array or object into individual elements. It is often used for combining arrays, adding items to arrays, or spreading object properties.
const arr1 = [1, 2, 3];
const arr3 = [4, 5, 6];
const combined = [...arr1, ...arr3];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//It can also be used to copy arrays:
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]

// The spread operator can expand an object into its individual properties:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedd = { ...obj1, ...obj2 };
console.log(combined); // Output: { a: 1, b: 2, c: 3, d: 4 }

//It can also be used to copy objects:
const originall = { a: 1, b: 2 };
const copyy = { ...original };
console.log(copy); // Output: { a: 1, b: 2 }

// The rest and spread operators can be combined for powerful and concise code. For example, you can use the rest operator to gather function arguments and the spread operator to pass them to another function:
function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
  }
  const result = multiply(2, 1, 2, 3);
  console.log(result); // Output: [2, 4, 6]
  

