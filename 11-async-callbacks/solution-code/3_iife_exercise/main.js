(function timedCountDown(endTime) { // IIFE that takes a single parameter
  // loop as long as the counter variable is less than or equal to the endTime parameter
  for (var i = 1; i <= endTime; i++) {
      // runCountDown increments one second each time it is run
      (function runCountDown(j){ // accepts a parameter
          setTimeout( function timer(){
              console.log( j ); // logs the value of the parameter
          }, j*1000 ); // sets a delay equal to the parameter value in seconds
          // the value of j does not change; instead, this IIFE creates a closure
          // over the current value of j
      })( i ); // value of i passed to IIFE
  }
})(5); // argument passed into IIFE when it is invoked
