/* Challenge 1: Given an array of strings, return only the strings that have exactly 4 characters.

Goal: Print only the strings from an array that have exactly 4 characters

Psuedo code:
-Declare a new array, with a value of a set of strings (make sure some are exactly 4 characters)
-Use a for loop to iterate through the array
-On each iteration through the loop pass the indexed value through a conditional if statement
-The if statement should check if the string in the indexed value is exactly equal to 4 characters, using the length method
-If true, the console will log the indexed value, a string
-In my example the expected output is Brad John*/

var friends = ["Sam", "Austin", "Brad", "John", "Sue"]

for ( i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
        console.log(friends[i]);
    }
}