// console.log("Hello World");

/*
Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction 
for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let number = 1;

// true
if (number == 1) {
  console.log("I predict True.", true);
} else {
  console.log("I predict false", false);
}

// false
number == 0
  ? console.log("I predict true,", true)
  : console.log("I predict false,", false);

// false
number == 2
  ? console.log("I predict true,", true)
  : console.log("I predict false,", false);

// true
if (number === 1) {
  console.log("I predict True.", true);
} else {
  console.log("I predict false", false);
}

// false
if (number === 0) {
  console.log("I predict True.", true);
} else {
  console.log("I predict false", false);
}

// false
number === "1"
  ? console.log("I predict true,", true)
  : console.log("I predict false,", false);

// true
if (number !== "1") {
  console.log("I predict True.", true);
} else {
  console.log("I predict false", false);
}

// false
if (number !== 1) {
  console.log("I predict True.", true);
} else {
  console.log("I predict false", false);
}

// true
if (number !== 0) {
  console.log("I predict True.", true);
} else {
  console.log("I predict false", false);
}
