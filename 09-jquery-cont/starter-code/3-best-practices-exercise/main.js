/* Independent Practice

Making a favorites list: event delegation


Refactor the code below.

The difference will be: use event delegation so that you only have
to set one event listener for all the items once, when the
code first runs, and you don't have to add any others whenever
someone adds an item.

Bonus: When the user mouses over each item, the item should turn grey. Don't use CSS hovering for this.

Bonus 2: Add another link, after each item, that allows you to delete the item.

*/

function addToList($list, thing) {

// 1. Comment out the following three lines of code, then below them 
//    write a single statement to replace them, using chaining.
// Start of code to replace
  var $thingLi = $('<li>');
  $thingLi.html(thing);
  $thingLi.addClass('fav-thing');
// End of code to replace

// Add refactored statement here:


  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {
// 2. Comment out the following three lines of code, then below them 
//    write a single statement to replace them, using chaining.
// Start of code to replace
  var $crossOffLink = $('<span>');
  $crossOffLink.html(' cross off');
  $crossOffLink.addClass('cross-off');
// End of code to replace

// Add refactored statement here:


// 3. Comment out the following three lines of code, then below them
//    write a single statement to replace them, using implicit iteration.
// Start of code to replace
  $li.each(function() {
    $(this).append($crossOffLink);
  });
// End of code to replace

// Add refactored statement here:



// 4a. Comment out the following four lines of code, then just before the 
//     final line of code in this file, create a new event listener that
//     uses event delegation to ensure that all elements with the class name cross-off
//      -- including those elements added by users -- perform the two actions in
//     the code below when clicked.

// Start of code to replace
  $crossOffLink.on('click', function(event) {
    $li.addClass('crossed-off');
    $crossOffLink.html('');
  });
// End of code to replace
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    addCrossOffLink($(li));
  });

  $button.on('click', function(event) {
    event.preventDefault();
    var newThing = $newThingInput.val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $newThingInput.val('');
    }
  });
// 4b. Add your new event listener code here:
//     For the list, when a user clicks a child element with the class value
//     'cross-off', execute a function that 
//        - creates a variable that stores a reference to the parent element of the clicked element 
//          (Hint: check out the jQuery parent() method and the 'this' keyword)
//        - adds the class 'crossed-off' to the item selected in the previous step
//        - sets the HTML content of the clicked element to an empty string

});
