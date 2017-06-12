/* setTimeout(function() {
    console.log("Hello world!");
}, 2000) */

//var numbers = [[1,2],[8,6],[5,9]];
var footballScores = [[7,23], [14,7], [49,27]];
var baseballScores = [[3,1], [5,3], [11,2]];

// callback function to sum the contents of each sub-array
var sumArray = function(values) { // takes an array of values as a parameter
    // create an empty array to store the results in
    var result = [];
    // iterate through the array provided as a parameter
    values.forEach(function(element) {
        // add the elements of the current sub-array and push the result to the result array
        result.push(element[0] + element[1]);
    });
    // return the value of the result array
    return result;
};

// callback function to calculate the difference of the numbers in each sub-array 
var diffArray = function(values) { // takes an array of values as a parameter
    // create an empty array to store the results in
    var result = [];
    // iterate through the array provided as a parameter
    values.forEach(function(element) {
        // calculate difference between elements of current sub-array and push result to result array
        result.push(element[0] - element[1]);
    });
    // return the value of the result array
    return result;
};

// function that accepts a callback function as a parameter
function makeResultsShower(values, callback) { // callback can be sumArray or diffArray
    // result of running makeResultsShower is to return a function
    // no values are logged until this returned function is called elsewhere in our code
    return function() { 
        // create a new variable and store the result of calling the callback function, 
        // providing the values parameter as an argument
        var changedArray = callback(values);
        // log the name of the callback function and the result it returns
        console.log("The result of " + callback.name + " is " + changedArray);
    }; 
}

// showResults(numbers, sumArray);
// showResults(numbers, diffArray); 

// creates a new function that sums the values in the footballScores array
var sumFootballScores = makeResultsShower(footballScores, sumArray); 
// creates a new function that sums the values in the baseballScores array
var sumBaseballScores = makeResultsShower(baseballScores, sumArray); 

// calls the sumFootballScores function
sumFootballScores(); 
// calls the sumBaseballScores function
sumBaseballScores(); 

/*
Could also combine the previous 4 statements into two, using IIFEs to invoke them immediately:

var sumFootballScores = makeResultsShower(footballScores, sumArray)(); 
var sumBaseballScores = makeResultsShower(baseballScores, sumArray)();
*/ 
