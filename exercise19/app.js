// console.log("Hello World");

/*
They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
*/

let countriesList = [
  {
    name: "Pakistan",
    code: "pk",
  },

  {
    name: "Italy",
    code: "ita",
  },

  {
    name: "Germany",
    code: "ger",
  },

  {
    name: "United States of America",
    code: "usa",
  },

  {
    name: "Netherland",
    code: "nth",
  },

  {
    name: "Azerbaijan",
    code: "azb",
  },

  {
    name: "Cyprus",
    code: "cyp",
  },

  {
    name: "Argentina",
    code: "arg",
  },
];

console.log("countries list in object", countriesList);

countriesList.map((data) => {
  console.log("countries name and codes: ", data.name + " " + data.code);
});
