function addToList($list, thing) {
  var $thingLi = $('<li>').html(thing).addClass('fav-thing');
  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {
  var $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  $li.append($crossOffLink);
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

  $thingList.on('click', '.fav-thing .cross-off', function() {
    var $thingItem = $(this).parent();
    $thingItem.addClass('crossed-off');
    $(this).html('');
  });

// Refactor the following two event listeners into a single event listener for multiple events.
/*
  $thingList.on('mouseenter', 'li', function(event) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(event) {
    $(this).siblings().removeClass('inactive');
  });
*/

  $thingList.on('mouseenter mouseleave', 'li', function(event) {
    if (event.type === 'mouseenter') {
      $(this).removeClass('inactive');
      $(this).siblings().addClass('inactive');
    } else if (event.type === 'mouseleave') {
      $(this).siblings().removeClass('inactive');
    }
  });
});
