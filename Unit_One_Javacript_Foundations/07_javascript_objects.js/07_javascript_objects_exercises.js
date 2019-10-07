// Object Challenges
// Working with functions and objects.
//
// Exercise 1
// Consider this variable:
//
var person = { fName: "Arthur", lastName: "Dent" }
// Write the code that accesses the first name of the person object. Then write the code that accesses the last name of the person object.
console.log(person.fName);

// Exercise 2
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlant = 'Earth';

// Exercise 3
// Update the person object with a method that logs 'Arthur Dent is from planet Earth.'.
console.log(`${person.fName} is from plant ${person.homePlant}`);

// Exercise 4
// Consider this variable:
//
var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
const describeProduct = productObj => {
  return `The product is a ${productObj.name}. It costs $${productObj.price}.`;
};

console.log(describeProduct(product));

// Exercise 5
// Consider this variable:
//
var lunch = { name: "PB and Banana", type: "sandwich", ingredients: ["bread", "peanut butter", "banana"] }
// Write the code that accesses the ingredients property.
const ingredients = lunch.ingredients;
console.log(ingredients);

// Exercise 6
// Write the code that access the 3rd ingredient of the lunch object.
console.log(ingredients[2]);

// Exercise 7
// Write a function that takes an argument like the lunch object and returns
//"The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const recipe = obj => {
  return `The ingredients for a ${obj.name} ${obj.type} are ${obj.ingredients.slice(0,obj.ingredients.length -1).join(', ')}, and ${obj.ingredients.slice(-1)}.`;
};

console.log(recipe(lunch));

// Exercise 8
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, jelly, and banana."
lunch.ingredients.splice(2, 0, "jelly");
console.log(recipe(lunch));
