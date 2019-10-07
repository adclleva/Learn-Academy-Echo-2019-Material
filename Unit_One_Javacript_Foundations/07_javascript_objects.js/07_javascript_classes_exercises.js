// Class Challenges
// Exercise 1
// Consider this class.
//
class Coffee {
  constructor(type, cream=0, sugar=0){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee.
const blackCoffee = new Coffee('black');
console.log(blackCoffee);
console.log(blackCoffee.coffeeProfile());

// Exercise 2
// Write the code that makes a coffee with 1 cream and 2 sugars.
const coffee1 = new Coffee("coffee1", 1, 2);
console.log(coffee1.coffeeProfile());

// Exercise 3
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
const coffee2 = new Coffee("coffee2",0, 2);
console.log(coffee2.coffeeProfile());

// Exercise 4
// Write a Latte class that receives a type, a milk type (default to 'milk') and a number of shots (default to 1).
class Latte {
  constructor(type = 'milk', shots = 1) {
    this.type = type;
    this.shots = 1;
  }

  // Exercise 5
  // Write a method for your Latte class that outputs the latte's profile.
  latteProfile() {
    return `${this.type} Latte with ${this.shots} shot(s)`;
  }
}


// Exercise 6
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
const regularLatte = new Latte('regular', 1);
console.log(regularLatte.latteProfile());

// Exercise 7
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
const doubleHazelLatte = new Latte('hazel', 2);
console.log(doubleHazelLatte.latteProfile());

// Exercise 8
// Write a class that accepts a product, and budget in its constructor. Add a function that determines if the product is in budget, and displays the appropriate message:

// "This product is in budget."
// "This product is beyond budget."
// Here is some sample data:
//
var productExample = { name: "OledMonitor", price: 300.00 };
var name = productExample.name;
var price = productExample.price;
var budget = 275.00;

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  checkBudget(budget) {
    return this.price <= budget ? `This product is in budget.` : `This product is not in budget.`;
  }
}

const product1 = new Product(name, price);

console.log(product1);
console.log(product1.checkBudget(budget));

// Then:
//
// Refactor the previous exercise to replace "Product" in the return to the name of the product.
//
// For example:
//
//  checkBudget(product, budget, message)
//  ----> "OledMonitor is beyond budget"
var productExample2 = { name: "OledMonitor", price: 300.00 };

var messages = ["beyond budget", "within budget", "barely in budget", "not within budget", "not even close to budget"];

const checkBudget = (product, budget, message) => {
  if (product.price == budget) {
    return `This ${product.name} is ${message[2]}`;

  } else if (product.price + 100 <= budget) {
    return `This ${product.name} is ${message[0]}`;

  } else if (product.price < budget) {
    return `This ${product.name} is ${message[1]}`;

  } else if (product.price > budget + 100) {
    return `This ${product.name} is ${message[4]}`;

  } else if (product.price > budget) {
    return `This ${product.name} is ${message[3]}`;
  }
}

console.log(checkBudget(productExample2, 100, messages)); // => This OldesMonitor is not close to budget
console.log(checkBudget(productExample2, 200, messages)); // => This OldesMonitor is not within budget
console.log(checkBudget(productExample2, 300, messages)); // => This OldesMonitor is barely in budget
console.log(checkBudget(productExample2, 350, messages)); // => This OldesMonitor is within budget
console.log(checkBudget(productExample2, 400, messages)); // => This OldesMonitor is beyond budget

// Exercise 9
// Write a program to get the volume of a Cylinder with four decimal places using object classes.
//
// Volume of a cylinder : V = πr2h
//
// where r is the radius and h is the height of the cylinder.

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
    this.volume = (Math.PI * Math.pow(radius, 2) * height).toFixed(4);
  }

  displayVolume() {
    return `Volume of the cylinder is: ${this.volume}.`
  }
}

const cylinder1 = new Cylinder(3, 2);
console.log(cylinder1.displayVolume());

// Exercise 10
// Write a program that calculates the total, tax, and weight of the items in a shopping cart.
//
var cartItems = [
  {
    name: "banana",
    price: 2.34,
    weight: 1.2
  },
  {
    name: 'Cereal',
    price: 5.67,
    weight: 2.2
  },
  {
    name: 'Gogurt',
    price: 3.99,
    weight: 3.1
  }
]

var caliTax = 1.0775;

class CartCalculator {
  constructor(cartItems, tax) {
    this.prices = cartItems.map(obj => {
      return obj.price;
    });

    this.weights = cartItems.map(obj => {
      return obj.weight
    });

    this.tax = tax;
  }

  totalPrice() {
    const total = this.prices.reduce((accumVal, currentVal) => {
      return accumVal + currentVal;
    }) * this.tax;

    return `Total Price with tax: $${total.toFixed(2)}`;
  }

  totalWeight() {
    const total = this.weights.reduce((accumVal, currentVal) => {
      return accumVal + currentVal;
    });

    return `Total Weight: ${total} lb`;
  }
}

const myCart = new CartCalculator(cartItems, caliTax);

console.log(myCart.totalPrice()); // => Total Price with tax: $12.93
console.log(myCart.totalWeight()); // => Total Weight: 6.5lb


// Stretch Goal
// Extend your shopping cart program by creating a new class called 'CartItem',
// and creating an instance of CartItem before passing each to the cart calculator.
// Is it easier or harder to pass class instances around? Does it make the code easier to read and reason about?

class CartItem extends CartCalculator{
  constructor(cartItems, tax) {
    super(cartItems, tax);
  }
}

var vegasTax = 1.0825;

const myOtherCar = new CartItem(cartItems, vegasTax);
console.log(myOtherCar.totalPrice()); // => Total Price with tax: $12.99
console.log(myOtherCar.totalWeight()); // => Total Weight: 6.5lb

/*
  Note: I just realized that I approached the question above differently but still gotten a good understanding of classes because of it.
*/

// SUPER STRETCH
// Exercise 11
// Write a program that has accessors to sort a list of books by title, author, or ID. Your class should accept a list of books in its constructor, and have 3 accessor functions.
//
// Hint: Research alpha and numeric sorting in javascript.
//
var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }
 ];

 class SortBooks {
   constructor(booksArr) {
     this.books = booksArr;
   }

   sortByTitle() {
     return this.books.map(bookObj => bookObj.title).sort();
   }

   sortByAuthor() {
     return this.books.map(bookObj => bookObj.author).sort();
   }

   sortByID() {
     return this.books.map(bookObj => bookObj.libraryID).sort((a, b) => a - b);
   }
 }

 const sortedBooks = new SortBooks(library);
 console.log(sortedBooks.sortByTitle());
 console.log(sortedBooks.sortByAuthor());
 console.log(sortedBooks.sortByID());
