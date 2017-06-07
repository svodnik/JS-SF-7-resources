
$(document).ready(function() {
  var $headline = $('<h1>');
  $headline.text("Summer of Love");
  $('body').append($headline);

  var $image = $('<img>');
  $image.attr('src','img/sol.jpg');
  $('body').append($image);
});