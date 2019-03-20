

var task;
var project;

document.addEventListener('DOMContentLoaded',function() {
  document.querySelector('select[name="task"]').onchange=changeEventHandler;
  document.querySelector('select[name="project"]').onchange=changeEventHandler2;
},false);

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value)
      {
        document.getElementById('vresp3').innerHTML = 'Please Refresh Page';
      }
    else {
      document.getElementById('vresp3').innerHTML = (event.target.value);
      document.getElementById("main-contact-form").action = "https://docs.google.com/forms/d/e/1FAIpQLSeMCYgJIoZax0kxvISsPhl-xdRceqJ-bfO6tzdaJ7Spic2VHA/formResponse";
      var project = document.getElementById('vresp2').innerHTML;
      var location = document.getElementById('vresp').innerHTML;
      var task = document.getElementById('vresp3').innerHTML;

        $.ajax({
          url: "https://docs.google.com/forms/d/e/1FAIpQLSeMCYgJIoZax0kxvISsPhl-xdRceqJ-bfO6tzdaJ7Spic2VHA/formResponse",
          data:  { "entry.416551146" : task , "entry.707183520" : project , "entry.727581677" : location },
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
    //					alert("Click -OK- to submit message");
            },
            200: function () {
    //					alert("Click -OK- to submit message");
            }
                }
        });
            setTimeout(function(){
              window.location.href = 'https://woodandmortar.github.io/clockedin/';
            }, 2500);
    }
}

function changeEventHandler2(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value)
      {
        document.getElementById('vresp2').innerHTML = 'Please Refresh Page';
      }
    else {
      toggleVisibility(document.getElementById('foo4'));
      document.getElementById('vresp2').innerHTML = (event.target.value);
    }
}





  function startGeoLookup() {
    navigator.geolocation.getCurrentPosition(success, error);
     $('.overlay, .loader').fadeIn('fast');
  }
  startGeoLookup();

  function success(pos) {
    $('.overlay, .loader').fadeOut('fast');
    var crd = pos.coords;
    var tme = pos.timestamp;
    var d = new Date(tme);
    var t = new Date(tme);
    // alert("Altitude: " + crd.altitude + " \nAltitudeAccuracy: " + crd.altitudeAccuracy);
    var roundAcc = Math.floor(crd.accuracy);
    document.getElementById('vresp').innerHTML = crd.latitude + ' ' + crd.longitude;
  }

  /* Error Codes: 1 PERMISSION_DENIED, 2 POSITION_UNAVAILABLE, 3 TIMEOUT */
  function error(err) {
    var geoerror = (err.code == (1, 2, 3) ? "Error loading" : err.message);
    document.getElementById('vresp').innerHTML = geoerror;
    $('.overlay, .loader').fadeOut('fast');
  }


var email ="nicholas.starks.610@gmail.com";
function onSignIn(googleUser) {

  var profile = googleUser.getBasicProfile();
  var fName = profile.getName();
  var userImage = profile.getImageUrl();
  var email = profile.getEmail();
  document.getElementById('vresp2').innerHTML = profile.getName();
  document.getElementById("main-contact-form").action = "https://docs.google.com/forms/d/e/1FAIpQLSeMCYgJIoZax0kxvISsPhl-xdRceqJ-bfO6tzdaJ7Spic2VHA/formResponse";
  document.getElementById('profilePic').src = userImage;
  toggleVisibility(document.getElementById('foo'));


}

        function onSignInCallback(resp) {
          gapi.client.load('plus', 'v1', apiClientLoaded);
        }

        /**
         * Sets up an API call after the Google API client loads.
         */
        function apiClientLoaded() {
          gapi.client.plus.people.get({userId: 'me'}).execute(handleEmailResponse);
        }

        var toggleVisibility = function(element) {
          if(element.style.display=='block'){
              element.style.display='none';
          } else {
              element.style.display='block';
          }
        }
