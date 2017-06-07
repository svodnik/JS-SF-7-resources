'use strict';

/*
'use strict';


// Code for XHR request to the first URL
var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
        } else {
            console.log("There was a problem.");
        }
    }
};

httpRequest.open("GET", "http://data.consumerfinance.gov/api/views.json");

httpRequest.send();


// Code for XHR request to the second URL
var httpRequest2 = new XMLHttpRequest();

httpRequest2.onreadystatechange = function() {
    if (httpRequest2.readyState === 4) {
        if (httpRequest2.status === 200) {
            console.log(httpRequest2.responseText);
        } else {
            console.log("There was a problem.");
        }
    }
};

httpRequest2.open("GET", "https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD");

httpRequest2.send();
*/

var httpRequest;
document.getElementById("getDataButton").onclick = function() {
  console.log('making request');
  makeRequest('http://data.consumerfinance.gov/api/views.json');
};

document.getElementById("getCustomDataButton").onclick = function() {
  console.log('Making request');
  makeRequest('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');
}

function makeRequest(url) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = responseMethod;
  httpRequest.open('GET', url);
  httpRequest.send();
}

function responseMethod() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log('Error: there was a problem with the request.');
    }
  }
}
