// console.log("Hello World");
/*
Exercise 17: Shrinking Guest List: You just found out that your new dinner table won’t 
arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that
person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.
*/

let oldPersonsList = ["Mohsin", "Ali", "Khan"];

console.log("Ali is not comming");

let modifiedPersonsList = oldPersonsList.map((person) => {
  if (person !== "Ali") return person;
  return "Ibad";
});

document.write("// old list" + "<br />");
modifiedPersonsList.map((person) => {
  console.log(
    `Hey! ${person} I just noticed that we have some extra space on table so I'm intiviting other members too`
  );
  document.write(
    `Hey! ${person} I just noticed that we have some extra space on table so I'm intiviting other members too` +
      "<br /> <br />"
  );
});

// add new member at the begining
modifiedPersonsList.unshift("Bilal");
// console.log(modifiedPersonsList);
modifiedPersonsList.splice(2, 0, "Khuzaima");
// console.log(modifiedPersonsList);

modifiedPersonsList.push("Haris");
console.log(modifiedPersonsList);

document.write("// new list");
modifiedPersonsList.map((person) => {
  console.log(
    `Hey! ${person} I just noticed that we have some extra space on table so I'm intiviting other members too`
  );
  document.write(
    "<br />" +
      `Hey! ${person} I just noticed that we have some extra space on table so I'm intiviting other members too` +
      "<br />"
  );
});

document.write(
  "<br />" +
    `<b>Update!!! Hey guests I have bad news that my table is not arrive yet so we have just space for two member</b>` +
    "<br />"
);

console.log(
  `\nUpdate!!! Hey guests I have bad news that my table is not arrive yet so we have just space for two member\n`
);

modifiedPersonsList = modifiedPersonsList.slice(0, 2);
console.log(modifiedPersonsList);

modifiedPersonsList.map((person) => {
  console.log(`Hey! ${person} , would you like be at my place for dinner?`);
  document.write(
    "<br />" +
      `<b>Hey! ${person} , would you like be at my place for dinner?</b>`
  );
});
