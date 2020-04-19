$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);



    console.log('current '+current);
    console.log('prev '+prev);
  }
});


jQuery(document).ready(function($){
  setTimeout(function(){ showNewsletterPopup(); }, 1200);

  $('.popup-close').click(function(){
      $('.newsletter-overlay').hide();
      setCookie('newsletter-popup', 'popped', 30);
  });
});


        function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}


var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }

setTimeout(function(){togglediv('welcomeMessage')}, 12000);
setTimeout(function(){togglediv('welcomeMessage2')}, 24000);

setTimeout(function(){
document.getElementById("img22").style.WebkitAnimationPlayState = "running";  }, 4000);

    var toggleVisibility = function(element) {
      if(element.style.display=='block'){
          element.style.display='none';
      } else {
          element.style.display='block';
      }
    }

  var location;
  var project;
  var task;
  var fName;
  var userImage;

    function startGeoLookup() {
      navigator.geolocation.getCurrentPosition(success, error);
       $('.overlay, .loader').fadeIn('fast');
       setTimeout(function() {toggleVisibility(document.getElementById('form1'));}, 1000);
       document.getElementById('button1').style.top = "3000px";
    }

    function success(pos) {
      $('.overlay, .loader').fadeOut('fast');
      var crd = pos.coords;
      var tme = pos.timestamp;
      var d = new Date(tme);
      var t = new Date(tme);
      // alert("Altitude: " + crd.altitude + " \nAltitudeAccuracy: " + crd.altitudeAccuracy);
      var roundAcc = Math.floor(crd.accuracy);
      document.getElementById('vresp9').innerHTML = crd.latitude + '<br>' + crd.longitude;
    }

    /* Error Codes: 1 PERMISSION_DENIED, 2 POSITION_UNAVAILABLE, 3 TIMEOUT */
    function error(err) {
      var geoerror = (err.code == (1, 2, 3) ? "Error loading" : err.message);
      document.getElementById('vresp').innerHTML = geoerror;
      $('.overlay, .loader').fadeOut('fast');
    }


  function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    var fName = profile.getName();
    var userImage = profile.getImageUrl();
    document.getElementById('vresp1').innerHTML = profile.getName();
    document.getElementById('profilePic').src = userImage;
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    switch(profile.getEmail()){
      default:
          setTimeout(function(){window.location.href = 'https://woodandmortar.github.io/mcred.html';}, 9000);
          break;
          case 'micheal.mfg@gmail.com':
              toggleVisibility(document.getElementById('foo1'));
              toggleVisibility(document.getElementById('foo2'));
              toggleVisibility(document.getElementById('foo3'));
              document.getElementById('fo1').innerHTML = "Admin Clock in";
              document.getElementById('fo2').innerHTML = "Travis Windsor Clock in";
              document.getElementById('fo3').innerHTML = "Christian Freitag Clock in";
              document.getElementById('vresp7').innerHTML = "Start time is 9:30 am at 8726 104th street, Overland Park KS";
                break;

          case 'woodmortar@gmail.com':
          var public_spreadsheet_url2 = 'https://docs.google.com/spreadsheets/d/19LJeD4yJcuHpwan3USroCUd0K9e3huBsilo5LCi2E4M/pub?hl=en_US&hl=en_US&hl=en_US&output=html';
          function init2() {
                  Tabletop2.init2( { key: public_spreadsheet_url2,
                                   callback: showInfo2,
                                   simpleSheet: true } );
                }
                init2();
                function showInfo2(data) {
                  var mNum = 0;
                  time2 = data[mNum].time;
                  knowledgelevel2 = data[mNum].knowledgelevel;
                  credcoins2 = data[mNum].credcoins;
                  mcreds2 = data[mNum].mcreds;
                  hours2 = data[mNum].hours;
                  document.getElementById("hud1a").innerHTML = [ time2 ].join(", ");
                  document.getElementById("hud2").innerHTML = [ knowledgelevel2 ].join(", ");
                  document.getElementById("hud3").innerHTML = [ credcoins2 ].join(", ");
                  document.getElementById("hud4").innerHTML = [ mcreds2 ].join(", ");
                  document.getElementById("hud5").innerHTML = [ hours2 ].join(", ");
                }
                break;

          case 'bigbawln@gmail.com':
          var public_spreadsheet_url3 = 'https://docs.google.com/spreadsheets/d/15CTeL8jhHEZFhHu78aepZAwiINhz4_a-cd37vIavksk/pub?hl=en_US&hl=en_US&hl=en_US&output=html';
          function init3() {
                  Tabletop3.init3( { key: public_spreadsheet_url3,
                                   callback: showInfo3,
                                   simpleSheet: true } );
                }
                init3();
                function showInfo3(data) {
                  var mNum = 0;
                  time3 = data[mNum].time;
                  knowledgelevel3 = data[mNum].knowledgelevel;
                  credcoins3 = data[mNum].credcoins;
                  mcreds3 = data[mNum].mcreds;
                  hours3 = data[mNum].hours;
                  document.getElementById("hud1a").innerHTML = [ time3 ].join(", ");
                  document.getElementById("hud2").innerHTML = [ knowledgelevel3 ].join(", ");
                  document.getElementById("hud3").innerHTML = [ credcoins3 ].join(", ");
                  document.getElementById("hud4").innerHTML = [ mcreds3 ].join(", ");
                  document.getElementById("hud5").innerHTML = [ hours3 ].join(", ");
                }
                                break;


   }


   toggleVisibility(document.getElementById('button1'));
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

            var sendForm = document.querySelector('#chatform'),
                textInput = document.querySelector('.chatbox'),
                chatList = document.querySelector('.chatlist'),
                userBubble = document.querySelectorAll('.userInput'),
                botBubble = document.querySelectorAll('.bot__output'),
                animateBotBubble = document.querySelectorAll('.bot__input--animation'),
                overview = document.querySelector('.chatbot__overview'),
                hasCorrectInput,
                imgLoader = false,
                animationCounter = 1,
                animationBubbleDelay = 600,
                input,
                previousInput,
                isReaction = false,
                unkwnCommReaction = "I don't understand, can you check your spelling please.",
                chatbotButton = document.querySelector(".submit-button")

            sendForm.onkeydown = function(e){
              if(e.keyCode == 13){
                e.preventDefault();

                //No mix ups with upper and lowercases
                var input = textInput.value.toLowerCase();

                //Empty textarea fix
                if(input.length > 0) {
                  createBubble(input)
                }
              }
            };

            sendForm.addEventListener('submit', function(e) {
              //so form doesnt submit page (no page refresh)
              e.preventDefault();

              //No mix ups with upper and lowercases
              var input = textInput.value.toLowerCase();

              //Empty textarea fix
              if(input.length > 0) {
                createBubble(input)
              }
            }) //end of eventlistener

            var createBubble = function(input) {
              //create input bubble
              var chatBubble = document.createElement('li');
              chatBubble.classList.add('userInput');

              //adds input of textarea to chatbubble list item
              chatBubble.innerHTML = input;

              //adds chatBubble to chatlist
              chatList.appendChild(chatBubble)

              checkInput(input);
            }

            var checkInput = function(input) {
              hasCorrectInput = false;
              isReaction = false;
              //Checks all text values in possibleInput
              for(var textVal in possibleInput){
                //If user reacts with "yes" and the previous input was in textVal
                if(input == "yes" || input.indexOf("yes") >= 0){
                  if(previousInput == textVal) {
                    console.log("sausigheid");

                    isReaction = true;
                    hasCorrectInput = true;
                    botResponse(textVal);
                  }
                }
                if(input == "no" && previousInput == textVal){
                  unkwnCommReaction = "For a list of commands type: Commands";
                  unknownCommand("I'm sorry to hear that :(")
                  unknownCommand(unkwnCommReaction);
                  hasCorrectInput = true;
                }
                //Is a word of the input also in possibleInput object?
                if(input == textVal || input.indexOf(textVal) >=0 && isReaction == false){
            			console.log("succes");
                  hasCorrectInput = true;
                  botResponse(textVal);
            		}
            	}
              //When input is not in possibleInput
              if(hasCorrectInput == false){
                console.log("failed");
                unknownCommand(unkwnCommReaction);
                hasCorrectInput = true;
              }
            }

            // debugger;

            function botResponse(textVal) {
              //sets previous input to that what was called
              // previousInput = input;

              //create response bubble
              var userBubble = document.createElement('li');
              userBubble.classList.add('bot__output');

              if(isReaction == true){
                if (typeof reactionInput[textVal] === "function") {
                //adds input of textarea to chatbubble list item
                  userBubble.innerHTML = reactionInput[textVal]();
                } else {
                  userBubble.innerHTML = reactionInput[textVal];
                }
              }

              if(isReaction == false){
                //Is the command a function?
                if (typeof possibleInput[textVal] === "function") {
                  // console.log(possibleInput[textVal] +" is a function");
                //adds input of textarea to chatbubble list item
                  userBubble.innerHTML = possibleInput[textVal]();
                } else {
                  userBubble.innerHTML = possibleInput[textVal];
                }
              }
              //add list item to chatlist
              chatList.appendChild(userBubble) //adds chatBubble to chatlist

              // reset text area input
              textInput.value = "";
            }

            function unknownCommand(unkwnCommReaction) {
              // animationCounter = 1;

              //create response bubble
              var failedResponse = document.createElement('li');

              failedResponse.classList.add('bot__output');
              failedResponse.classList.add('bot__output--failed');

              //Add text to failedResponse
              failedResponse.innerHTML = unkwnCommReaction; //adds input of textarea to chatbubble list item

              //add list item to chatlist
              chatList.appendChild(failedResponse) //adds chatBubble to chatlist

              animateBotOutput();

              // reset text area input
              textInput.value = "";

              //Sets chatlist scroll to bottom
              chatList.scrollTop = chatList.scrollHeight;

              animationCounter = 1;
            }

            function responseText(e) {

              var response = document.createElement('li');

              response.classList.add('bot__output');

              //Adds whatever is given to responseText() to response bubble
              response.innerHTML = e;

              chatList.appendChild(response);

              animateBotOutput();

              console.log(response.clientHeight);

              //Sets chatlist scroll to bottom
              setTimeout(function(){
                chatList.scrollTop = chatList.scrollHeight;
                console.log(response.clientHeight);
              }, 0)
            }

            function responseImg(e) {
              var image = new Image();

              image.classList.add('bot__output');
              //Custom class for styling
              image.classList.add('bot__outputImage');
              //Gets the image
              image.src = "./"+e;
              chatList.appendChild(image);

              animateBotOutput()
              if(image.completed) {
                chatList.scrollTop = chatList.scrollTop + image.scrollHeight;
              }
              else {
                image.addEventListener('load', function(){
                  chatList.scrollTop = chatList.scrollTop + image.scrollHeight;
                })
              }
            }

            //change to SCSS loop
            function animateBotOutput() {
              chatList.lastElementChild.style.animationDelay= (animationCounter * animationBubbleDelay)+"ms";
              animationCounter++;
              chatList.lastElementChild.style.animationPlayState = "running";
            }

            function commandReset(e){
              animationCounter = 1;
              previousInput = Object.keys(possibleInput)[e];
            }

            // hlep

            var possibleInput = {
              // "hlep" : this.help(),
              "help" : function(){
                responseText("try trying something like... show BEST WORK")
                responseText("Typing COMMANDS will always bring up the main list.")
                commandReset(0);
                return
                },
              "best work" : function(){
                responseText("I will show you our best work!");
                responseImg("image0.jpg");
                responseImg("image1.jpg");
                responseImg("image2.jpg");
                responseImg("image3.jpg");
                responseImg("image4.jpg");
                responseText("Would you like to see more? (Yes/No)")
                commandReset(1);
                return
                },
              "about" : function(){
                responseText("Morton here, your digital assistant for everything WoodandMortar.");
                responseText("I'm also a Salmon.fund expert.");
                responseText("Using your google account, I'll be able to remember you.");
                responseText("Would you like to connect? (Yes/No)");
                commandReset(2);
                return
                },
              "experience" : function(){
                responseText("We've completed 21 High-end to Flip Kitchens in the past 8 months");
                responseText("We sub-contract 75% of our work load, to Kansas City non-profits through our mentorship platform.");
                responseText("Micheal Salmon, Founder and Co-Owner pays special attention to project details and workflow ensuring the best possible value.");
                responseText("Crycella Freitag, Co-Owner and human resource powerhouse manages all aspects of communication, logistics and finance.");
                responseText("Would you like to see our Business Process Manual? (Yes/No)");
                commandReset(3);
                return
              },
              "specials" : function(){
                responseText("Spring means decks, patios, and landscaping");
                responseText("We're ordering our lumber for summer projects, so all appointments made before june 29th get all lumber AT COST.");
                responseText("$6000 Two-Story decks");
                responseText("$4000 /room Water Damage Reframe");
                responseText("$2500 Emperor's Tree House");
                commandReset(4);
                return
              },
              "theme" : function(){
                responseText("Our 2019 aesthetic begin with:");
                responseText("Chic Grey Walls");
                responseText("Satin Ultra-White Trim");
                responseText("Midnight Horse Black Front Door");
                responseText("Forest Green, Faded Two-Tone Exterior");
                commandReset(5);
                return
              },
              "vision" : function(){
                responseText("We are aiming for completing WoodandMortar.edu by 2022");
                responseText("By training locals in specialized trades,");
                responseText("we are giving equal oppourtunity for high yield local property investments and ownership.");
                responseText("Our tradespeople will be the backbone for Kansas City remodeling.");
                commandReset(6);
                return
              },
              "contact" : function(){
                responseText("email: <a href='mailto:micheal.mfg@gmail.com?Subject=Hello%20Micheal' target='_top'>send me a message</a>");
                commandReset(7);
                return
              },
              "morton" : function(){
                responseText("UmmmmmHmmmmmm.... Yes?");
                commandReset(8);
                return
              },
              "commands" : function(){
                responseText("about, best work, contact, mcred <br> specials, theme, experience, vision");
                commandReset(9);
                return
              },
              "logistics" : function(){
                responseText("Entering logistics mode...");
                responseText("Please Select RECORD NOW from the quick access menu.");
                document.getElementById('fo1').innerHTML = "RECORD NOW";
                document.getElementById('fo2').innerHTML = "RECORD NOW";
                document.getElementById('fo3').innerHTML = "RECORD NOW";
                document.getElementById('vresp8').innerHTML = "Logistics Start/End";
                commandReset(10);
                return
              },
              "lunch" : function(){
                responseText("Phew... Rough day.");
                responseText("Please Select TAKE LUNCH from the quick access menu.");
                document.getElementById('fo1').innerHTML = "TAKE LUNCH";
                document.getElementById('fo2').innerHTML = "TAKE LUNCH";
                document.getElementById('fo3').innerHTML = "TAKE LUNCH";
                document.getElementById('vresp8').innerHTML = "LUNCH Start/End";
                commandReset(11);
                return
              },
              "tucked" : function(){
                responseText("Finally, I was getting worried");
                responseText("Please Select TUCKED IN from the quick access menu.");
                document.getElementById('fo1').innerHTML = "TUCKED IN";
                document.getElementById('fo2').innerHTML = "TUCKED IN";
                document.getElementById('fo3').innerHTML = "TUCKED IN";
                document.getElementById('vresp8').innerHTML = "TUCKED IN";
                commandReset(12);
                return
              },
              "mcred" : function(){
                responseText("<a href='https://drive.google.com/open?id=10lbMd2b0YuqKF9mq5D9gMK6g58yQ849lJ2_LwJ3QpRI' target='_blank'>Safety Training</a> <br>  <a href='https://drive.google.com/open?id=1aovEiosNLQ2Bv09UtQuf15Pxf28PXco4ogT02ryoF1w' target='_blank'>Safety Practices</a> <br> <a href='https://drive.google.com/open?id=1OLezOcO7mLV8Jc0Mp6sy9o4HodRoHZlT67xecsrpbTM' style='color:red;' target='_blank'>Safety TEST</a>");
                responseText("<a href='https://drive.google.com/open?id=1sIbw07cA7386r0BX2-nRuf5_6BO8obgt4868zk1MMvU' target='_blank'>Drywall & Texture Study Guide</a> <br>  <a href='https://drive.google.com/open?id=1mfcnDzY4__0RGBMBmOoUm3KWVUxoXyYwWuwHNY7M788' style='color:red;' target='_blank'>Drywall & Texture TEST</a> ");
                responseText("<a href='https://drive.google.com/open?id=1ywAJ7PvYA3WsdG1ninCW0S8H18etPnLJ_asRghmqP9I' target='_blank'>Painting Study Guide</a> <br>  <a href='https://drive.google.com/open?id=1mKbNJ-wTZ9MlJrOtLc1Ei4C0f08HrpTnUIPmk2l_25I' style='color:red;' target='_blank'>Painting TEST</a> ");
                responseText("<a href='https://drive.google.com/open?id=16vgbiM7Y6I2D4UYYffhL44UDrJ1iHVMNTo7DJ7uQTCE' target='_blank'>Tile Study Guide</a> <br>  <a href='https://drive.google.com/open?id=1fUV4WDuQJfwW7cukP1aoeFlR0ZgY1MVK3IWeqdO4jH4' style='color:red;' target='_blank'>Tile TEST</a> ");
                commandReset(13);
                return
              },
              "receipt" : function(){
                responseText("We'll need a photo of the receipt.");
                  setTimeout(function() {window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf7j7tfOSDwOR2U5UIarKxhRsUwIlBhoJkOtSq7kDAPmUl-3Q/viewform"}, 4000);
                  },

                  "drywall" : function(){
             responseText("Which step of drywalling are you on?");
             responseText("Shimming <br> Hanging <br> Mudding <br> Sanding <br> Finish ");
             responseText("Type one of these into your chatbox and I'll walk you through how to move forward");
             commandReset(0);
             return
             },

           "shimming" : function(){
             responseText("So you want your walls FLAT flat, okay! ");
             responseText("Hold the longest level you have (4ft or longer is ideal) across as many studs as possible to identify low areas");
             responseText("Shim out all low areas to match the highest stud");
             responseText("Decide what kind of sheetrock you need <br> Mold resistant is great for bathrooms and basements <br> ½ in is the most common thickness for drywall <br> If you’re patching, make sure to match the existing drywall");
             responseText("Type &quot;hanging&quot; when you’re ready for the next step!");
             commandReset(0);
             return
             },

           "hanging" : function(){
             responseText("Mount drywall on the ceilings first and the walls afterwards <br> It is more difficult but yields better results")
             responseText("Mark your studs before you do anything else")
             responseText("Measure where the drywall will be mounted before hanging <br> If the edge of the drywall does not land on a stud, it should be no more than 4in away from the nearest stud");
             responseText("Cut the drywall if necessary <br> Use a T-square or chalk line to draw your cut line <br> Use a utility knife to cut the surface paper <br> IMPORTANT NOTE Utility knives should be sharp enough to achieve this with only a small amount of pressure. If your knife is not cutting, change your blade. Do NOT apply more pressure, this increases the risk of injury");
             responseText("Bend the piece at the cut line until it snaps then use the utility knife on the paper on the other side")
             responseText("For a super crisp edge, plane the edge of the piece with your utility knife or shaving tool")
             responseText("Type &quot;mudding&quot; when you’re ready for the next step");
             commandReset(0);
             return
             },

           "mudding" : function(){
             responseText("Decide what kind of drywall mud you should use <br> All Purpose matches its name and can be used almost anywhere <br> Topping gives a super smooth finish but is dense and takes a long time to dry <br> Setting Compounds, like 20 minute mud, are perfect for quick patches but should not be used as a top coat");
             responseText("Apply your mud heavily to all seams and corners");
             responseText("Place your seam tape on the heavily mudded joints");
             responseText("Using a putty knife, squeeze the tape flat. <br> Excess mud should squeeze out both sides during this step");
             responseText("Using the excess mud and as much extra mud as you need, smooth out all tape areas until the tape cannot be seen");
             responseText("Allow this layer of mud to dry THOROUGHLY before moving on to the next step");
             responseText("Type &quot;sanding&quot; when you’re ready for the next step!");
             commandReset(0);
             return
             },

           "sanding" : function(){
             responseText("All sanding should be done with the finished product in mind so keep a lighter hand than you think");
             responseText("Use a fine or super fine grit sanding sponge or sanding pad");
             responseText("Decide how you will sand <br> Sanding sponges are great for small areas like closets or trouble areas that need a little extra love <br> Sanding poles are perfect for large expanses and ceilings");
             responseText("Sand down all seams and screw holes in a circular motion until smooth");
             responseText("Special focus should be given to large floats with smoothness as the goal <br>-Pro Tip: Smooth always beats flat! Large blemishes can be worked out with a good float so don’t spoil it with over sanding!");
             responseText("It is very likely that you will have to repeat this step after you sand <br> this is called a skim coat and can be done more than once if necessary.");
             responseText("Type &quot;finish&quot; when you are ready for the next step");
             commandReset(0);
             return
             },

           "finish" : function(){
             responseText("Finish doesn’t mean the end here, just the final look!");
             responseText("Decide what type of finish your after <br> Flat <br> Texture ");
             responseText("Type one of these into your chatbox and I'll walk you through how to get your desired finish");
             return
             },

           "flat" : function(){
             responseText("You’ve decided on flat walls and ceilings! ");
             responseText("Flat is one of the most difficult finishes to pull off but I believe in you! <br> Break out the drywall mud because you will need it!");
             responseText("After the initial sanding you will definitely need a skim coat <br> You can apply the skim coat to trouble areas in the way described during mudding <br> You can also slightly water down the drywall mud to the consistency of pancake batter and roll it on with a paint roller <br> Follow the roll with a large 12in putty knife to smooth out large expanses quickly.");
             responseText("Allow all skim coat areas to dry thoroughly");
             responseText("Repeat the sanding step <br> Delicacy is key for a flat finish <br> -Pro Tip: Look at each of your areas from different angles to ensure a smooth finish from everywhere in the room");
             responseText("Apply primer in the preferred method (See priming for more details)” <br> This will allow you to see flaws and imperfections you may have missed before");
             responseText("Once the primer is dry, use paint tape to mark areas that need touch up mud <br> Before you remove the tape, allow touch ups to dry and sand each area <br> removing the paint tape before sanding makes it easier to miss spots.");
             responseText("Your walls and surfaces should now be flat. Enjoy your chic new space!");
             return
             },

         "texture" : function(){
             responseText("You’ve decided on textured walls and ceilings! ");
             responseText("Be prepared to get messy! From popcorn and knockdown to comb and crows feet, there is no clean way to do texture <br> Before we get there, first, we have to prep our surface");
             responseText("After the initial sanding you will probably need a skim coat <br> You can apply the skim coat to trouble areas in the way described during mudding <br> You can also slightly water down the drywall mud to the consistency of pancake batter and roll it on with a paint roller <br> Follow the roller with a 12in putty knife to smooth out large expanses quickly.");
             responseText("Allow all skim coat areas to dry thoroughly");
             responseText("Repeat the sanding step <br> Getting the walls as smooth as possible in a reasonable time is key <br> Textures tend to hide a lot and a flawless finish isn’t required but that doesn’t mean neglect your skim coat");
             responseText("Texture does not have to be standard and custom textures are not uncommon and can be a great way to make a bold statement");
             responseText("Regardless of what kind of texture you’re doing be it knockdown or a custom comb in a wave, the mix is key <br> Ensure your texture is thoroughly mixed and stirred<br> Clumps will clog your hoppers and gouge your product and air bubbles will ruin an otherwise perfectly textured finish ");
             responseText("If you are applying your texture with a hopper, consider protecting areas in the line of fire that are not intended to be textured <br> Texture is easy to sand down so this step is not always necessary but should be considered especially for larger areas");
             responseText("Apply the texture in the style desired and allow to dry thoroughly <br> Using a pole sander, very lightly sand for a consistent height and a crisp finish <br> When we say lightly, we mean lightly!! That pole sander should be barely touching the surface");
             responseText("Your walls and surfaces should now be textured. Enjoy your chic new space!");
             return
             },

  "tile" : function(){
        responseText("Which step of tiling are you on?");
        responseText("Leveling <br> Placement <br> Tiling <br> Grout <br> Polish ");
        responseText("Type one of these into your chatbox and I'll walk you through how to move forward");
        return
        },

      "leveling" : function(){
        responseText("For wood floors or subflooring <br> - Lay out hardie backer board (Do NOT secure yet) <br> - Shim underneath any areas that are low <br> - Secure hardie backer with specialized screws");
        responseText("For cement floors <br> - Apply autoleveling compound according to manufacturer's instructions <br> - Allow to dry thoroughly <br> - Mix thinset mortar slightly thinner than manufacturer recommendation. The consistency of pancake batter is ideal for this step <br> - Apply mortar to any dramatically lower areas using a 'float out' method");
        responseText("For walls or horizontal surfaces <br> - Identify low areas before demolition <br> - Shim out at the stud <br> - Mount drywall or hardie backer with corresponding screw type");
        return
        },

      "placement" : function(){
        responseText("All placement starts with the center line. Finding the center line is always based off of maximum visual aesthetic");
        responseText("For a single room's floor <br> - Measure the center point at each end of the room running the direction you intend your tile to run <br> - Draw or string chalk this line");
        responseText("For multiple room's floor <br> - Find the line that intersects the most rooms (halls, doorways, intersections, etc.) <br> - Place a long level or board in the area until two points of measure can be decided. <br> - For precision you may use the two points of measure but in most cases, placing a long level or board is sufficient enough for eyeing a straight center line <br> - Trace your level or board or use a chalk line to mark");
        responseText("For walls or horizontal surfaces <br> - The wall opposite of the entry to a room should be the center point <br> - Measure the center point at the top and bottom of the wall <br> - Draw or string chalk this line");
        responseText("Type &quot;place 2&quot; when you're ready for the next step");
        return
        },

      "place 2" : function(){
        responseText("Decide how you want your tile laid. For some common options and inspirations, click <a href='https://www.bunnings.com.au/diy-advice/home-improvement/tiles/10-tile-patterns-you-need-to-know'>here</a>");
        responseText("Dry lay (this means lay without any mortar or adhesive) a section large enough to establish your pattern");
        responseText("If you are tiling a ceiling, remember your dry lay should be done back side of the tile facing you");
        responseText("Dry laying on a wall is nearly impossible and we don't recommend it, but if you are really determined to, you can either draw the tiles on your wall or lay out a mock wall on the ground");
        responseText("Adjust the tiles as needed until you are confident you can achieve your pattern without excessive measuring for the real lay");
        return
        },

      "tiling" : function(){
        responseText("Mix mortar to manufacturer's specifications or prepare your tile adhesive <br> - - IMPORTANT NOTE: Tile adhesive can be used on walls and ceilings but should never be used on floors <br> - Mortar can be used on all surfaces but should be mixed a little thicker for walls and ceilings");
        responseText("Apply mortar or tile adhesive to the working surface and distribute evenly with the flat side of the trowel <br> - 90% coverage is minimum to code but 100% coverage is ideal");
        responseText("Using the toothed side of the trowel, draw lines in the mortar opposite to how the tile will be laid <br> - Pro Tip: use a bull's eye swirl when tiling ceilings for a strong suction");
        responseText("Place tiles in the desired pattern");
        responseText("Press down hard and slide the tile around slightly before resting it in its final position. This will remove air bubbles and ensure a good seal");
        responseText("Use tile spacers liberally for consistent grout lines");
        responseText("Wait at least 24 hours before moving on to the next step");
        return
        },

      "grout" : function(){
        responseText("Choose your grout type. Sanded is the most common but unsanded does have its place. For the differences, click <a href='https://homeguides.sfgate.com/sanded-vs-nonsanded-grout-tile-93501.html'>here</a>");
        responseText("Mix the grout to manufacturer's specifications <br> -Pro Tip: It is better to mix small amounts of grout and make more batches to ensure consistency");
        responseText("Using a rubber float, apply the grout to the exposed lines squeezing out air pockets as you go");
        responseText("If working on a horizontal surface, ensure the grout lines are as level to the tile as possible");
        responseText("If working on a vertical surface, run either your finger or the corner of your float over the grout line to create a small valley. This allows water to run guided down the wall");
        responseText("Just so you know, the more excess grout you have the harder the polishing step is");
        return
      },

      "polish" : function(){
        responseText("This step should be completed in concurrence with the grouting step about ten minutes after you have begun grouting.");
        responseText("Using a large sponge and a bucket of fresh water, gently wipe the excess grout off the tiles");
        responseText("Rinse your sponge frequently and change your bucket of water regularly for best results");
        responseText("Have mixed grout at the ready for touch ups on areas you may have missed or areas where you have polished too hard");
        responseText("BE THOROUGH! Once the grout has cured, removing it will be extremely difficult");
        responseText("Allow at least 24 hours (ideally 48 - 72) for grout to cure");
        responseText("Your tile project should now be complete. Enjoy your beautiful new space!");
        return
        },
            }







            var reactionInput = {
              "best work" : function(){
                responseText("<a href='https://woodandmortar.github.io/'>Click the arrows on our homepage</a>")
                responseText("On this GitHub page you'll find everything about Morton");
                responseText("<a href='https://github.com/woodandmortar'>WoodandMortar on GitHub</a>")
                animationCounter = 1;
                return
              },
              "about" : function(){
                responseText("I'll need to use GMAIL as your contact point.");
                setTimeout(function(){
                  window.location.href = "mailto:info@woodandmortar.com?Subject=Hello%20again&body=If%20GMAIL%20didnt%20open%20please%20send%20a%20gmail%20message%20to%20my%20sender%20address"; }, 4000);
                  animationCounter = 1;
                return
                },
              "experience" : function(){
                responseText("I will redirect you a printable Business Process Manual");
                setTimeout(function(){
                  window.location.href = "https://docs.google.com/document/d/1OAgXxoruvHMqD7lyAqu0m1Bq082rXp7g2Z1wcc-vZnY/edit?usp=sharing"; }, 6000);
                animationCounter = 1;
                return
              }
            }
