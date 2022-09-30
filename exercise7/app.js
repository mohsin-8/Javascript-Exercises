// console.log("Hello World");

/*
Favorite Number: Store your favorite number in a variable. 
Then, using that variable, create a message that reveals your favorite number. Print that message.
*/

let favNum = 8;

const favNumber = () => {
  let number = document.getElementById("number");

  number.innerText = `My Favourite Number: ${favNum}`;
};
