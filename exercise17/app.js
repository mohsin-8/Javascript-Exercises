// console.log("Hello World");

/*
Dinner Guests: Working with one of the programs from Exercises 14 
through 18, print a message indicating the number of people you are inviting to dinner.
*/

let oldPersonsList = ["Mohsin", "Ali", "Khan"];

// console.log("Ali is not comming");

let modifiedPersonsList = oldPersonsList.map((person) => {
  if (person !== "Ali") return person;
  return "Ibad";
});

document.write("// old list" + "<br />");
modifiedPersonsList.map((person) => {
  //   console.log(
  //     `Hey! ${person} I just noticed that we have some extra space on table so I'm intiviting other members too`
  //   );
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
// console.log(modifiedPersonsList);

document.write("// new list");
modifiedPersonsList.map((person) => {
  //   console.log(
  //     `Hey! ${person} I just noticed that we have some extra space on table so I'm intiviting other members too`
  //   );
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

// console.log(
//   `\nUpdate!!! Hey guests I have bad news that my table is not arrive yet so we have just space for two member\n`
// );

modifiedPersonsList = modifiedPersonsList.slice(0, 2);
// console.log(modifiedPersonsList);

modifiedPersonsList.map((person) => {
  //   console.log(`Hey! ${person} , would you like be at my place for dinner?`);
  document.write(
    "<br />" +
      `<b>Hey! ${person} , would you like be at my place for dinner?</b>`
  );
});

// exercise 19 answer
document.write(
  `<br /> <br />  <b>I am inviting ${modifiedPersonsList.length} guests for dinner</b>`
);

console.log(`I am inviting ${modifiedPersonsList.length} guests for dinner`);
