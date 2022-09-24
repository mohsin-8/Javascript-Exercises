console.log("Hello World");

/*
exercise2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let person_name;
person_name = "mohsiN Ali khAn";

// toLowerCase();
document.write("<b>To Lower Case:</b> " + person_name.toLowerCase() + "<br />");

// toUpperCase();
document.write("<b>To Upper Case:</b> " + person_name.toUpperCase() + "<br />");

// titleCase();

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

document.write(
  "<b>To Title Case using map() Method: </b>",
  titleCase("mohsin ali khan")
);
