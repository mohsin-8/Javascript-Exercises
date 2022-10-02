// console.log("Hello World");

/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians 
by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let show_magicians = (magicians) =>
    magicians.map((magician) => console.log(`${magician} is a magicians`)),
  magicians = ["magician1", "magician2", "magician3"];

const make_great = (magicians) =>
  magicians.map((magician) => `Great ${magician}`);

magicians = make_great(magicians);

show_magicians(magicians);
