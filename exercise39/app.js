// console.log("Hello World");

/*
Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/

let magicians = ["magician1", "magician2", "magician3"];

const show_magicians = () => {
  magicians.map((data) => {
    console.log(`He is a ${data}`);
  });
};

show_magicians();
