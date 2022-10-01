console.log("Hello World");

/*
Exercise 11: Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”
*/

const favorite = ["Suzuki 150", "Corola 95"];

var statement1 = `I would like to own a ${favorite[0]}.`;
var statement2 = `I would like to own a ${favorite[1]}.`;

document.write(statement1 + "<br />");
document.write(statement2);
