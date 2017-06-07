/*

Create an ajax request for the following data source:
https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

STEPS:
- Copy the code you created in the codealong.
- Change the URL to the one shown below.
- Verify that a new set of results is shown in the console.

BONUSES: 
- Customize the error message to display the text of the HTTP status message.
  (HINT: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText)
- Refactor the code to work with user interaction. In the index.html file
there is a "Get Health Data" button. Modify your code so data is only requested and
logged to the console after a user clicks the button.

*/

'use strict';

// ADD YOUR CODE BELOW 

 // Create instance of XMLHTTPRequest
 var httpRequest = new XMLHttpRequest();

  // Set a custom function to handle the request
 httpRequest.onreadystatechange = responseMethod;

 function responseMethod() {
    // Check if our state is "DONE"
    if (httpRequest.readyState === 4) {
      // If our request was successful we get a return code/status of 200
      if (httpRequest.status === 200) {
        // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
        console.log(httpRequest.responseText);
      } else {
        // This is the scenario that there was an error with our request
        console.log('There was a problem with the request.');
        // BONUS 1:
        // console.log('There was a problem with the request: ' + httpRequest.statusText);
      }
    }
  }

  // Open method accepts 3 parameter:
  // 1. Request type: these are all the HTTP verbs we covered above
  // 2. The URL
  // 3. Optional boolean third parameter, that dictates whether this is an asynchronous call (default is true)
  httpRequest.open('GET', 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');

  // The send method takes an optional parameter. If our API request allows additional parameters or JSON objects to be passed through (primarily through POST requests), we pass them in the send method.
  httpRequest.send();


/* BONUS 2:

document.getElementById("getDataButton").onclick = function() {
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = responseMethod;

  function responseMethod() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
      } else {
        console.log('There was a problem with the request.');
        // BONUS 1:
        // console.log('There was a problem with the request: ' + httpRequest.statusText);
      }
    }
  }

  httpRequest.open('GET', 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');

  httpRequest.send();
};