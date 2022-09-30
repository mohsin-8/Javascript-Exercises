// console.log("Hello World");

/*
Exercise 6 and 7: Number Eight: Write addition, subtraction, multiplication, and division 
operations that each result in the number 8. Be sure to enclose your 
operations in print statements to see the results.
*/

let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");

// addition operation
let numPlusOne = 5;
let numPlusTwo = 3;
let answerOne = numPlusOne + numPlusTwo;

// subtraction operation
let numMinusOne = 10;
let numMinusTwo = 2;
let answerTwo = numMinusOne - numMinusTwo;

// multiplication operation
let numMultiplyOne = 2;
let numMultiplyTwo = 4;
let answerThree = numMultiplyOne * numMultiplyTwo;

// division operation
let numDivisionOne = 16;
let numDivisionTwo = 2;
let answerFour = numDivisionOne / numDivisionTwo;

addition.innerText = `ADDITION: ${numMinusOne} + ${numMinusTwo} = ${answerTwo}`;
subtraction.innerText = `SUBTRACTION: ${numMinusOne} - ${numMinusTwo} = ${answerTwo}`;
multiplication.innerText = `DIVISION: ${numMultiplyOne} * ${numMultiplyTwo} = ${answerThree}`;
division.innerText = `DIVISION: ${numDivisionOne} / ${numDivisionTwo} = ${answerFour}`;
