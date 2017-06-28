"use strict";

var zipLookup = (function() {
    var httpRequest;

    function checkInput() {
        var zip = document.getElementById("zip").value; 
        if (zip.length === 5) {
            getLocation();
        } else {
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
        }
    }

    function getLocation() {
        var zip = document.getElementById("zip").value; 
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    displayData(httpRequest.responseText);
                } else {
                    console.log("There was a problem.");
                }
            }
        }
        httpRequest.open("get","http://api.zippopotam.us/us/" + zip, true);
        httpRequest.send();
    }

    function displayData(response) {
        var resultData = JSON.parse(response);
        var city = document.getElementById("city");
        var state = document.getElementById("state");
        city.value = resultData.places[0]["place name"];
        state.value = resultData.places[0]["state abbreviation"];
    }

    return {
        check: checkInput
    };
})();

var zip = document.getElementById("zip"); 
zip.addEventListener("keyup", zipLookup.check, false);
