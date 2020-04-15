


var toggleVisibility = function(element) {
  if(element.style.display=='block'){
      element.style.display='none';
  } else {
      element.style.display='block';
  }
}

    function aboutScr(){
    var scrImage1 = "	url('./pics/scrImage1.jpg')";
    var scrImage2 = "	url('./pics/scrImage2.jpg')";
    var scrImage3 = "	url('./pics/scrImage3.jpg')";
      var scrImage3a = "	url('./pics/scrImage3a.jpg')";
      var scrImage3b = "	url('./pics/scrImage3b.jpg')";
      var scrImage3c = "	url('./pics/scrImage3c.jpg')";
    var scrImage4 = "	url('./pics/scrImage4.jpg')";
    var scrImage5 = "	url('./pics/scrImage5.jpg')";
    toggleVisibility(document.getElementById('live-chat'));
    document.getElementById("changeme").style.backgroundImage = scrImage1;
    setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage2;
                          document.getElementById("foo4").innerHTML = "They are creating an education standard for subcontractors using my free, online teaching environment to provide honest and affordable contruction.";}, 7000);
    setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage3;
                          document.getElementById("foo4").innerHTML = "They are specialized in both interior and exterior remodels of all sizes.";
                                  setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage3a;}, 4000);
                                  setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage3b;}, 7000);
                                  setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage3c;}, 10000);
                          }, 16000);
    setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage4;
                          document.getElementById("foo4").innerHTML = "The Woodandmortar training headquarters is under contruction in northeastern Kansas City, Kansas.";},28000);
    setTimeout(function(){document.getElementById("changeme").style.backgroundImage = scrImage5;togglediv('item')
                          document.getElementById("foo4").innerHTML = "Click Contact us to bring up our pre-filled email. <br>Click learn more to dive deeper into Woodandmortar LLC and Salmon.fund.";
                                  setTimeout(function(){ aboutScr = function(){};}, 10000);
                          }, 34000);
    }
