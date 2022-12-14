// console.log("Hello World");

/*
City Names: Write a function called city_country() that 
takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/

const city_country = (city, country = "Pakistan") => {
  console.log(`${city}, ${country}`);
};

city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("Islamabad");
