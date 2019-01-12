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


var loading = function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add('loading');
  e.target.setAttribute('disabled','disabled');
  setTimeout(function(){
    e.target.classList.remove('loading');
    e.target.removeAttribute('disabled');
  },1500);

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
            window.location.href = 'https://woodandmortar.github.io/';
          }, 1500);
};

var btns = document.querySelectorAll('button');
for (var i=btns.length-1;i>=0;i--) {
  btns[i].addEventListener('click',loading);
}


function onSignIn(googleUser) {

  var profile = googleUser.getBasicProfile();
  var fName = profile.getName();
  var userImage = profile.getImageUrl();
  var email = profile.getEmail();
  document.getElementById('vresp2').innerHTML = profile.getName();
  document.getElementById("main-contact-form").action = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdvXT57YthGUIFqmd_4yFu8Wm1QkkVgFO7kf3DLTdTmdvRVVg/formResponse";
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