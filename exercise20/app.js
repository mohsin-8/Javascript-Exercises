// console.log("Hello World");

/*
Intentional Error: If you haven’t received an array index 
error in one of your programs yet, try to make one happen. 
Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.
*/

let sports = ["football", "cricket", "rugby"];
// console.log(sports);

try {
  sports[3][3];
  console.log(sports);
} catch (err) {
  console.log(err);
}
