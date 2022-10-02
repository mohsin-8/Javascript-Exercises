// console.log("Hello World");

/*
Exercise 14: Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people 
you’d like to invite to dinner. Then use your list to print 
a message to each person, inviting them to dinner.
*/

const guestList = ["Mohsin", "Ali", "Khan"];

guestList.map((guest) => {
  //   console.log(`Hey! ${guest}, we are planing dinner tonight`);

  document.write(`Hey! ${guest}, we are planing dinner tonight` + "<br />");
});
