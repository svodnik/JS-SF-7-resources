/*

1. Predict the results of the code below, but without running it in the browser.
  - What is logged by the first console.log statement? Why?
  - What is logged by the second console.log statement? Why?

2. Run the code, check the results against your predictions. If the results were different, explain why.

*/

var fullName = 'John Doe';
var obj = {
   fullName: 'Colin Ihrig',
   prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName());

var test = obj.prop.getFullName;

console.log(test());


