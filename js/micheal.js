
function onSignIn(googleUser) {
  document.getElementById("main-contact-form").action = "https://docs.google.com/forms/d/e/1FAIpQLSdvXT57YthGUIFqmd_4yFu8Wm1QkkVgFO7kf3DLTdTmdvRVVg/formResponse";
  var project = document.getElementById('vresp2').innerHTML;
  var location = document.getElementById('vresp').innerHTML;
  var task = document.getElementById('vresp3').innerHTML;

    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdvXT57YthGUIFqmd_4yFu8Wm1QkkVgFO7kf3DLTdTmdvRVVg/formResponse",
      data:  { "entry.569412235" : task , "entry.320157692" : project , "entry.1143322173" : location },
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
          window.location.href = 'https://woodandmortar.github.io/clockedin.html';
        }, 2500);

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
