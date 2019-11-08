# Challenges:
# Write a loop that prints from 1 to 20. Try it with all the loops covered in this lesson. Do it again counting down from 20 to 1.

def print1to20
    i = 1

    while i <= 20
        puts i
        i += 1
    end
end

print1to20
# Write a program which takes a number and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.

def is_between_1_10?(num)
  (1..10).include?(num)
end

puts is_between_1_10?(22)
puts is_between_1_10?(2)

# FIZZBUZZ - Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz

def FizzBuzz
    
end

# Create a method called sum_these_numbers which takes two integers as an argument and prints their suh=um to the screen.
# Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.
# Create an array of words. Iterate through the array using .each and a block, then print each of those words in all capitals.
# Rock, Paper, Scissors

# Using if, elsif, and else blocks, write a function called rps_game which allows two users to input their moves in "Rock, Paper, Scissors" and which determines the winner (or if a tie occurred).

# Valid Date

# Write a function called valid_date that prompts the user for a date with a month, date, and year (all numerically expressed) and returns 'true' if this date exists and 'false' if it does not (for example: 7 28 2014 exists, but 22 34 1999 does not). Make sure to account for leap years. This program is easiest if you prompt for the month, date, and year separately.

# Password Checker Challeng
# You are writing the user registration page for a secure web site. On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

# User ID and password cannot be the same
# User ID and password have to be at least six characters long
# Password has to contain at least one of: !#$
# User ID cannot contain the following characters: !#$ and space
# Password cannot be the word "password"
# Proceed as follows:

# Challenge: Write a function called same that takes a user ID and a password, and returns true if they are, and false otherwise.

# Tests:

# same("joe", "joe") -> true
# same("joe", "joe1") -> false
# Challenge: Write a function called long_enough that checks whether a String is at least six characters long, and returns true if it is, and false otherwise. Tests:

# long_enough("12345") -> false
# long_enough("123456") -> true
# Challenge Write a function called does_not_contain_special which checks to see if !, #, $ is not contained in a given String. Tests:

# does_not_contain_special("Hello Friend") -> true
# does_not_contain_special("A#C") -> false
# does_not_contain_special("A!C") -> false
# does_not_contain_special("A$C") -> false
# Challenge Write a method called contains_special which checks to see if !, #, $ is contained in a given String.

# Tests:

# contains_special("Hello Friend") -> false
# contains_special("A#C") -> true
# contains_special("A!C") -> true
# contains_special("A$C") -> true
# Challenge Write a method that inputs user ID and password from the user, and then tells the user if the they are acceptable. Write a main method called validate_password that:

# First lets a user input both user ID and password,
# Then use the methods above to evaluate if the user ID and password combination is acceptable or not
# Tells user what the result is.
# Stretch Goal

# Password has to contain at least one digit Task: Write a function using basic functions on String to see if a given String contains contains one of "0","1", "2", "9". Tests:

# has_digit("abc") -> false
# has_digit("a1c") -> true
# Super Stretch Goal

# Password has to contain a lower and an uppercase letter. Tests:

# has_upper_and_lowercase("abc") -> false
# has_upper_and_lowercase("aBc") -> true
# has_upper_and_lowercase("123") -> false
