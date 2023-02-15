/* Challenge 6: Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. 
For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

Goal: Turn a sentence into a seperated array, iterate through it capitalizing the first character of each string, change array back to string and print that string.

Psuedocode:
- Declare a value, named sentence, with the assigned value of the string "Turing is the best."
- Declare a value, splitArray, with the value of sentence, which is being called on by the split method.  The parameter in the split method is a space, " ".
- Iterate through the splitArray array with a for loop, the initial counter value is 0, the condition is counter less than length, each loop increment the counter by 1
- On each loop, mutate or modify the indexed value to a new value
- The new value is the first caharacetr ...[0] on which the toUpperCase method is called, concoctanated with the rest of the original string using the slice method with a parameter of 1
- Declare a value, newSentence, with the assigned value of splitArray called on by the join method with " " as the parameter to include a space, this will turn our array back into a string
- Print newSentence
- Expected output is "Turing Is The Best." */

var sentence = "Turing is the best.";
splitArray = sentence.split(" ");

for (i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
}

var newSentence = splitArray.join(" ");

console.log(newSentence);