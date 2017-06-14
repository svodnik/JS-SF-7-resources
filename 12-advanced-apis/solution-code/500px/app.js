/*
Remember that to run this solution file, you need to do 2 things:
1. Replace "YOUR JAVASCRIPT SDK KEY" with your key from 500px
2. Start http-server from the folder on your computer where this file is located
*/

$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'YOUR JAVASCRIPT SDK KEY' // replace placeholder value with your key
  });

  // When the user logs in we will pull their favorite photos
  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    // check if navigator geolocation is available from the browser
    if (navigator.geolocation) {
      // if it is use the getCurrentPosition method to retrieve the Window's location
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ', lat);
        console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
          rpp: 20,  // Return 28 results
        };

        // Now that we have the user's location, let's search the API for landscape photos nearby
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found!');
          } else {
            handleResponseSuccess(response);
          }
        });
      });
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }
  });

  function handleResponseSuccess(response) {
    var allData = response.data.photos;

    $.each(allData, function() {
      var element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }

  // If the user clicks the login link, log them in
  $('#login').click(function() {
    _500px.login();
  });

  // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
  // This keeps the site from prompting the user to log in each time the page is refreshed
  _500px.getAuthorizationStatus();
});
