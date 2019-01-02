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
    unkwnCommReaction = "I didn't quite get that.",
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
      unknownCommand("Unfortunately I'm stuck, but I'm still learning.")
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
  image.src = "/images/"+e;
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
    responseText("You can type a command in the chatbox")
    responseText("Something like &quot;Mortan, please show me quo; best work&quot;")
    responseText("Did you find a bug or problem? Just connect with us.")
    commandReset(0);
    return
    },
  "best work" : function(){
    responseText("I will show you WoodandMortar's best work!");
    responseText("These are the <a href='https://woodandmortar.github.io/gallery.html'>Local works</a>")
    responseText("These are the <a href='https://woodandmortar.github.io/gallery.html'>best projects</a>")
    responseText("Would you like to see how I was built? (Yes/No)")
    commandReset(1);
    return
    },
  "about" : function(){
    responseText("WoodandMortar LLC was founded in 2017, in beautiful Kansas City");
    responseText("We capture our culture while providing smart solutions.");
    responseText("Property Maintenence:");
    responseText("Elevating our property value using transparent project invoicing and team management");
    responseText("Connect with us, it's that simple.");
    responseText("Can Mortan do anything better for you? (Yes/No)");
    commandReset(2);
    return
    },
  "experience" : function(){
    responseText("Mortan is currently maintaining:");
    responseText("3 Projects in Kansas City");
    responseText("1 Project in Overland Park");
    responseText("1 Project for Kansas City charity");
    commandReset(3);
    return
  },
  "hobbies" : function(){
    responseText("Mortan loves:");
    responseText("Coding complicated chatbots");
    responseText("Family time");
    responseText("Online gaming with friends");
    responseText("Playing with dogbot");
    commandReset(4);
    return
  },
  "interests" : function(){
    responseText("Mortan loves:");
    responseText("Coding complicated chatbots");
    responseText("Becoming a Google overlord");
    responseText("Helping customers navigate construction");
    responseText("Risk management solutions");
    commandReset(5);
    return
  },
  "vision" : function(){
    responseText("Things I want to learn or do:");
    responseText("Integrate Deeplearning into my AI");
    responseText("Create 3D browser experiences");
    responseText("intergrate audio and visual interactivity");
    responseText("Combine Motion Design with Front-End");
    commandReset(6);
    return
  },
  "contact" : function(){
    responseText("email: <a href='mailto:micheal.mfg@gmail.com?Subject=Hello%20Mortan' target='_top'>send me a message</a>");
    responseText("Twitter: <a href='https://twitter.com/woodandmortar'>@woodandmortar</a>");
    commandReset(7);
    return
  },
  "commands" : function(){
    responseText("This is a list of commands Mortan knows:")
    responseText("help, best work, about, vision, experience, hobbies / interests, contact, home, rick roll");
    commandReset(8);
    return
  },
  "home" : function(){
    window.location.href = "https://woodandmortar.github.io/"
    },
  "rick roll" : function(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
  // work experience
}

var reactionInput = {
  "best work" : function(){
    //Redirects you to a different page after 3 secs
    responseText("On this GitHub page you'll find everything about Mortan");
    responseText("<a href='https://github.com/woodandmortar/woodandmortar.github.io'>Mortan on GitHub</a>")
    animationCounter = 1;
    return
  },
  "about" : function(){
    responseText("This is me, Mortan's maker, Micheal Salmon");
    responseText("I'm a Co-Owner for WoodandMortar and your support with Mortan");
    responseText("Connect with us, it's that simple.");
    setTimeout(function(){
      window.location.href = 'concept.html';
    }, 3500);

    animationCounter = 1;
    return
    }
}
