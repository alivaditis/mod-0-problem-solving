/* Challenge 5: Start with an array of travel destinations. 
Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

Goal: Print the strings in an array in alphabetical order using string interpolation to put each string in a sentence

Psuedocode:
-Declare a new array, named cities, setting the values to strings, each will be the name of a city
-Create a new value, named sorted, with the assigned value of the array cities, on which the sort method is called
-Itereate through the sorted array using a for loop, the initial counter will be set to 0, the condition of which will be the length of the array, incrememented by 1 each loop.
-On each iteration print a sentence using string interpolation to insert the indexed value/string into the sentence
-The expected outpus will be:
    The next place I want to visit is Atlanta!
    The next place I want to visit is Denver!
    The next place I want to visit is New York City!
    The next place I want to visit is Tokyo!
    The next place I want to visit is Toronto!  */

var cities = ["New York City", "Atlanta", "Tokyo", "Toronto", "Denver"];
var sorted = cities.sort();

for (i = 0; i <sorted.length; i++) {
    console.log(`The next place I want to visit is ${sorted[i]}!`);
}