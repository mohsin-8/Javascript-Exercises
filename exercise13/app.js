// console.log("Hello World");

/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

const guestList = ["Mohsin", "Ali", "Khan"];

guestList.map((guest) => {
  //   console.log(`Hey! ${guest}, we are planing dinner tonight`);

  document.write(`Hey! ${guest}, we are planing dinner tonight` + "<br />");
});

document.write(
  "<br />" + (guestList[2] = `khan is not coming today`) + "<br /> <br />"
);

guestList.pop();
guestList.push("Obaid");
console.log(guestList);

guestList.map((guest) => {
  //   console.log(`Hey! ${guest}, we are planing dinner tonight`);

  document.write(`Hey! ${guest}, we are planing dinner tonight` + "<br />");
});
