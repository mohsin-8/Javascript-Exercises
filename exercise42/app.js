// console.log("Hello World");

/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call 
provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.
*/

let makeSandwiches = (sandwiches) =>
  console.log(
    `Quantity of item required in sandwiches are ${sandwiches.length}, and these items are ${sandwiches}\n`
  );

makeSandwiches(["potato"]);
makeSandwiches(["potato", "union"]);
makeSandwiches(["potato", "union", "cheese"]);
