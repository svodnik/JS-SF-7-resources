/*
// function expression version of an IIFE
var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}(); // parentheses after function expression invoke the function immediately

*/

// function declaration version of an IIFE
// opening paren added before the function keyword
(function countDown(start) { // takes a single parameter
    var counter;
    for(counter = start; counter > 0; counter--) {
        console.log(counter);
    }
})(10); // closing paren added after closing brace, then parentheses added
// value in parentheses is the argument value passed to the function during the invocation