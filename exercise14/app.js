// console.log("Hello world");

/*
Exercise 16: More Guests: You just found a bigger dinner table, 
so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement 
to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
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
