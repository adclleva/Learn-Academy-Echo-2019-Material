// Loops/Iteration Challenges
// Below are exercises in using loops and iteration. Beneath each prompt write the code to fulfill the exercise requirement.
//
// Write a for loop that logs each number from 1 - 20.
for (let i = 1; i <= 20; i++) {
  console.log(i)
}

// Write a for loop that logs the result of each number from 1 - 20 tripled.
for (let i = 1; i <= 20; i++) {
  console.log(i * 3)
}
// Create a for loop that logs each EVEN number from 1-20, and in the place of every odd number, returns the word "ODD" So the result should be: [ODD, 2, ODD, 4, ODD, 6 ....]
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
      console.log("ODD")
  } else {
    console.log(i)
  }
}
// The Odd and Even
// Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Sample Output : "0 is even" "1 is odd" "2 is even"
var oddEvenArr = []

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
      oddEvenArr.push(`${i} is odd`)
  } else {
    oddEvenArr.push(`${i} is even`)
  }
}

console.log(oddEvenArr)

// Fizz Buzz
// Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 & i % 5 != 0) {
      console.log(i, 'fizz')
    } else if (i % 3 != 0 & i % 5 == 0) {
      console.log(i, 'buzz')
    } else if (i % 3 == 0 & i % 5 == 0) {
      console.log(i, 'fizzbuzz')
    }
  }
}

fizzBuzz()
