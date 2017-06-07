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
  var $thingLi = $('<li>').html(thing).addClass('fav-thing');
  // Changed for Bonus 2
  // addCrossOffLink($thingLi);
  addLinks($thingLi);
  $list.append($thingLi);
}

// Removed for Bonus 2
/*function addCrossOffLink($li) {
  var $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  $li.append($crossOffLink);
}*/

// Bonus 2
function addLinks($li) {
  var $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  var $deleteLink= $('<span>').html(' delete item').addClass('delete');
  $li.append($crossOffLink, $deleteLink);
}

$(document).ready(function() {
  var $thingList = $('#fav-list');
  var $things = $('.fav-thing');
  var $button = $('#new-thing-button');
  var $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    // Changed for Bonus 2
    // addCrossOffLink($(li));
    addLinks($(li));
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

  $thingList.on('click', '.fav-thing .cross-off', function() {
    var $thingItem = $(this).parent();
    $thingItem.addClass('crossed-off');
    $(this).html('');
  });

  // Bonus 2 -- could also be further refactored by combining with preceding event listener
  $thingList.on('click', '.fav-thing .delete', function() {
    var $thingItem = $(this).parent();
    $thingItem.addClass('deleted');
  });

  // Bonus 1
  $thingList.on('mouseenter mouseleave', 'li', function(event) {
    if (event.type === 'mouseenter') {
      $(this).removeClass('inactive');
      $(this).siblings().addClass('inactive');
    } else if (event.type === 'mouseleave') {
      $(this).siblings().removeClass('inactive');
    }
  });
});
