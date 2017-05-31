/* Independent Practice

Enhancing a to do list: jQuery

- The starter code displays a to do list. You can type a new item in the box, click the Create to add the item to the list
- Using jQuery, add a "complete task" link at the end of each to-do item
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

*/


function addCompleteLinks($lis) {
  var $completedLink = $('<span>').html(' complete task').addClass('complete-task');
  // $lis is a collection, and the following command
  // acts on each instance in the collection
  $lis.append($completedLink);

  $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

$(document).ready(function() {
  var $button = $('#new-thing-button');
  var $thingList = $('#to-do-list');
  var $newThingInput = $('#new-thing');

  // The following statement results in a collection
  var $thingListItems = $('#to-do-list .to-do-item');
  addCompleteLinks($thingListItems);

  $button.on('click', function(event) {
    event.preventDefault(); 
    var newThing = $newThingInput.val();
    var $newThingLi = $('<li>');
    $newThingLi.text(newThing); 
    $thingList.append($newThingLi);
    addCompleteLinks($newThingLi);
    $newThingInput.val('');
  });
});
