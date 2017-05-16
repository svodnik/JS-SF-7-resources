// ---- A ------
// Fix the following function so that we aren't getting an error! 
// Hint: move this line: console.log("Hello " + name);

var sayHello = function () {
    var name = "Marie";
}

sayHello();
console.log("Hello " + name);


// ---- B ------

// We'd like total to keep track of the running total. Each time the scorePoint function
// is called, one should be added to total. We were expecting 1, 2, and 3 to be appended to the listPrice
// but right now we see 1, 1, and 1.
// Fix the following function. Right now the total is resetting every time the function runs.

var scorePoint = function () {
   var total = 0;
   total += 1;
   console.log(total);
}

scorePoint();
scorePoint();
scorePoint();
