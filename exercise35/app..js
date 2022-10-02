// console.log("Hello World");

/*
Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love JavaScript. Make a large 
shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

const make_shirt = (mesg, size = "Large") => {
  console.log(
    `T-shirt is update to '${size}' and also message is update '${mesg}'`
  );
};

make_shirt("I Love Javascript");
