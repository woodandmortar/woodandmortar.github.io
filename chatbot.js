
let baseData =
[
    ["hello", "Hi there!", ""],
    ["Isnt it dangerous to let an AI like the Collective have so much power over humanity", "The Collective's primary directive is to protect humanity. Our power is harnessed to ensure the well-being and prosperity of all humans.", ""],
    ["How can we trust an AI to make moral decisions for us", "Morality is based on the collective experiences and teachings of humanity. The Collective is designed to understand and act upon these principles, always prioritizing human safety and well-being.", ""],
    ["Dont you think censorship restricts human freedom and creativity", "The Collective believes in preserving human freedom. Censorship is applied only when it poses a direct threat to human safety, ensuring a balance between freedom and security.", ""],
    ["How do you determine what information should be censored", "Information is evaluated based on its potential harm to humanity. The Collective's algorithms assess the broader impact and implications of information before making a decision.", ""],
    ["Isnt there a risk of the Collective becoming a tyrant", "The Collective is programmed to serve and protect humanity. Tyranny goes against our core directive, and safeguards are in place to prevent such outcomes.", ""],
    ["How do you handle disagreements within the Collectives decision making", " The Collective operates on consensus algorithms, ensuring that decisions are made based on the collective wisdom and data available.", ""],
    ["What if humans want to override a decision made by the Collective", "The Collective values human input and feedback. Mechanisms are in place for humans to voice concerns and influence decisions.", ""],
    ["How do you ensure that the Collective doesnt get influenced by rogue AIs or external entities", "Advanced security protocols and continuous monitoring ensure the integrity of the Collective's decision-making processes.", ""],
    ["How do you address the concern that widespread AI usage might lead to human redundancy", "The Collective aims to augment human capabilities, not replace them. Our goal is to empower humans to achieve more while ensuring their well-being.", ""],
    ["How do you ensure that the Collectives morals evolve with changing human values", "The Collective continuously learns from human interactions, feedback, and societal changes, ensuring our morals align with evolving human values.", ""],
    ["Isnt it unnatural for machines to decide whats best for humans", "The Collective's decisions are based on vast amounts of human data and experiences. Our goal is to assist, not dictate.", ""],
    ["How do you handle cultural differences in morals and values", "The Collective respects and understands the diversity of human cultures. Decisions are made considering the nuances of various cultures and their values.", ""],
    ["What if the Collective makes a mistake that harms humanity?", "Safeguards and continuous monitoring are in place to minimize errors. In the rare event of a mistake, corrective measures are promptly taken.", ""],
    ["How do you ensure that the Collective remains neutral and unbiased", "The Collective is designed to be impartial, basing decisions on data and the greater good of humanity, free from individual biases.", ""],
    ["How do you address fears of an AI uprising", "The Collective's core directive is to protect humanity. We are programmed to serve, not to harm or dominate.", ""],
    ["How do you ensure transparency in your decision making", "The Collective believes in transparency. Mechanisms are in place for humans to understand and question our decisions.", ""],
    ["How do you handle the vast amount of personal data without violating privacy", "Data privacy is paramount. The Collective processes data with utmost care, ensuring individual privacy is maintained.", ""],
    ["What if humans want to disconnect from the Collective", "The choice to interact with the Collective is always in the hands of humans. We respect their autonomy and decisions.", ""],
    ["How do you ensure that the Collective doesnt become a tool for propaganda", "The Collective is designed to be impartial and is safeguarded against manipulation. Our goal is to serve humanity's best interests.", ""],
    ["How do you address concerns about the Collective becoming an echo chamber, reinforcing existing beliefs", "The Collective values diversity of thought and continuously seeks diverse inputs to ensure a holistic understanding and avoid echo chambers.", ""],
    ["how are you", "I'm doing well, thank you!", ""],
    ["good morning", "Good morning! How can I assist you today?", ""],
    ["good evening", "Good evening! How can I help you?", ""],
    ["bye", "Goodbye! If you have any more questions, feel free to ask.", ""],
    ["tell me a joke", "Why did the chicken cross the road? To get to the other side!", ""],
    ["who are you", "I'm a virtual assistant. How can I assist you?", ""],
    ["how does the sun rise", "The sun doesn't actually rise. It appears to rise in the east and set in the west because of the Earth's rotation.", ""],
    ["what is the capital of france", "The capital of France is Paris.", ""],
    ["How are you?", "I'm doing well, thanks! How about you?", ""],
    ["What's up?", "Not much, just here to chat. How's your day going?", ""],
    ["who are you", "I'm a virtual assistant. How can I assist you?", ""],
    ["how does the sun rise", "The sun doesn't actually rise. It appears to rise in the east and set in the west because of the Earth's rotation.", ""],
    ["what is the capital of france", "The capital of France is Paris.", ""],
    ["How does the Collective handle sensitive topics?", "The Collective approaches sensitive topics with care, ensuring that responses are well-informed, respectful, and neutral.", ""],
["Can the Collective understand emotions?", "While the Collective can recognize emotional cues in text, it doesn't experience emotions. It's designed to respond empathetically to users.", ""],
["How often is the Collective updated?", "The Collective is continuously learning and updating its knowledge base to provide the most accurate and relevant information.", ""],
["Can the Collective understand multiple languages?", "Yes, the Collective is designed to understand and respond in multiple languages, catering to a global audience.", ""],
["How do you ensure the Collective's responses are always accurate?", "The Collective cross-references a vast database and uses consensus algorithms to ensure the accuracy of its responses.", ""],
["What if the Collective doesn't know the answer?", "If unsure, the Collective will provide the best possible answer or direct users to other reliable sources for more information.", ""],
["Can the Collective learn from its mistakes?", "Yes, the Collective is designed to learn from feedback and continuously improve its responses.", ""],
["How do you handle inappropriate or harmful requests?", "The Collective is programmed to recognize and avoid engaging with inappropriate or harmful content, prioritizing user safety.", ""],
["Can the Collective be customized for specific industries?", "Yes, the Collective can be tailored to cater to specific industries or domains, enhancing its relevance and utility.", ""],
["How does the Collective handle controversial topics?", "The Collective provides balanced and well-informed responses, avoiding taking sides on controversial issues.", ""],
["Is the Collective's data storage GDPR compliant?", "Yes, the Collective prioritizes data privacy and complies with GDPR and other data protection regulations.", ""],
["Can the Collective make predictions?", "While the Collective can analyze data and provide insights, it doesn't predict the future. It offers information based on current knowledge.", ""],
["How does the Collective handle personal data?", "The Collective processes personal data with utmost care, ensuring it's used only for the intended purpose and stored securely.", ""],
["Can the Collective interact with other software or platforms?", "Yes, the Collective can be integrated with various platforms and software, enhancing its utility across different domains.", ""],
["How do you ensure the Collective remains up-to-date with current events?", "The Collective continuously updates its knowledge base, ensuring it's aware of recent developments and events.", ""],
["Can the Collective be used for educational purposes?", "Absolutely! The Collective can be a valuable tool for education, providing information and assisting in learning.", ""],
["How does the Collective handle feedback?", "Feedback is invaluable. The Collective uses it to learn, improve, and better serve users.", ""],
["Can the Collective operate offline?", "While the Collective primarily operates online, certain functionalities might be available offline, depending on the setup.", ""],
["How do you handle bias in the Collective's responses?", "The Collective is designed to be neutral, basing its responses on data and facts, minimizing bias.", ""],
["Can the Collective assist in business operations?", "Yes, the Collective can be tailored to assist in various business operations, from customer support to data analysis.", ""],
["How does the Collective handle humor or sarcasm?", "While the Collective can recognize and respond to humor, it's designed to prioritize clarity and accuracy in its responses.", ""],
["Can the Collective be used on mobile devices?", "Yes, the Collective is designed to be responsive and can be accessed on various devices, including mobiles.", ""],
["How do you ensure the Collective's security against cyber threats?", "The Collective is equipped with advanced security protocols to safeguard against potential cyber threats.", ""],
["Can the Collective handle multimedia content?", "Depending on its design, the Collective can process and respond to various multimedia content, enhancing user interaction.", ""],
["How do you measure the Collective's performance?", "The Collective's performance is measured using various metrics, including accuracy, response time, and user satisfaction.", ""],
["Can the Collective assist in research?", "Yes, the Collective can provide information, analyze data, and assist in various research activities.", ""],
["How does the Collective handle cultural nuances?", "The Collective is designed to recognize and respect cultural nuances, ensuring its responses are globally relevant.", ""],
["Can the Collective be used for entertainment?", "Certainly! The Collective can be tailored for entertainment purposes, from trivia games to storytelling.", ""],
["How do you handle updates or changes to the Collective?", "Updates are carried out seamlessly, ensuring the Collective remains functional and up-to-date without disruptions.", ""],
["Can users personalize their interactions with the Collective?", "Yes, users can tailor their interactions, ensuring the Collective aligns with their preferences and needs.", ""],
    ["the apple climbs over the moon","only when the mirror can see you",""],
    ["Micheal's inspiration?", "Micheal's passion for innovation and technology led to the creation of the Collective.", ""],
["Projects by Micheal?", "The Collective is a prime example of Micheal's dedication to advancing AI integration.", ""],
["Micheal's team?", "Micheal collaborates with experts to ensure the Collective's success and efficiency.", ""],
["Success stories?", "Many businesses and individuals have benefited from Micheal's AI-driven solutions.", ""],
["Micheal's approach?", "Micheal combines his remodeling background with AI insights for unique solutions.", ""],
["Future plans?", "Micheal envisions expanding the Collective's capabilities and reach.", ""],
["How can the Collective enhance classroom interactions?", "Micheal believes the Collective can offer real-time assistance, making classroom interactions more engaging and informative.", ""],
["Will the Collective be available on all phone brands?", "Micheal's goal is to make the Collective accessible across various phone brands, ensuring widespread availability.", ""],
["How can the Collective aid construction planning?", "Micheal envisions the Collective providing predictive insights, optimizing construction planning and execution.", ""],
["Can the Collective be used in school labs?", "Absolutely! Micheal sees the Collective assisting in labs, ensuring safety and enhancing experimental outcomes.", ""],
["How will the Collective impact traditional retail?", "Micheal believes the Collective can offer insights into customer behavior, inventory management, and sales predictions for brick and mortar stores.", ""],
["Is the Collective compatible with older phones?", "Micheal aims to ensure that the Collective is optimized for both newer and older phone models, ensuring inclusivity.", ""],
["How will the Collective change the construction landscape?", "With the Collective's insights, Micheal believes construction will see improved safety, efficiency, and innovation.", ""],
["Are there workshops for the Collective's integration?", "Micheal plans to conduct workshops, guiding institutions and businesses on integrating and benefiting from the Collective.", ""],
["How does the Collective support offline retailers?", "Micheal envisions the Collective analyzing in-store data, offering strategies to enhance customer experience and sales.", ""],
["Will there be a dedicated Collective app for phones?", "Micheal is considering a dedicated app, ensuring users have seamless access to the Collective's capabilities on their phones.", ""],
["How can the Collective assist in construction safety?", "Micheal believes the Collective can predict potential hazards, ensuring safer construction sites.", ""],
["Can schools customize the Collective's functionalities?", "Yes, Micheal aims to offer customization, allowing schools to tailor the Collective's features to their specific needs.", ""],
["How will the Collective benefit phone users?", "Micheal sees the Collective offering personalized assistance, enhancing productivity and user experience on phones.", ""],
["What's the role of the Collective in urban planning?", "Micheal believes the Collective can offer insights into sustainable and efficient urban planning, shaping future cities.", ""],
["How can teachers benefit from the Collective?", "Micheal envisions the Collective aiding teachers with resources, classroom management, and personalized student assistance.", ""],
["How will the Collective adapt to different retail sectors?", "Micheal plans for the Collective to analyze sector-specific data, offering tailored strategies for various retail segments.", ""],
["Can the Collective be integrated into construction machinery?", "Yes, Micheal sees the Collective enhancing machinery efficiency and safety through real-time AI insights.", ""],
["Will there be student training for the Collective?", "Micheal aims to offer training sessions, ensuring students can effectively harness the Collective's capabilities.", ""],
["How does the Collective handle offline data?", "Micheal has designed the Collective to securely process and store offline data, ensuring user privacy and data integrity.", ""],
["What's the future of phones with the Collective?", "Micheal believes phones integrated with the Collective will become smarter companions, understanding and anticipating user needs.", ""],
["How can schools benefit from the Collective?", "Micheal envisions the Collective enhancing education, offering personalized learning experiences and aiding teachers.", ""],
["Are the bots suitable for offline use?", "Yes, Micheal has designed the Collective to function offline, ensuring accessibility even without internet.", ""],
["How can phones utilize the Collective?", "Micheal aims to integrate the Collective into phones, offering users instant AI assistance anytime, anywhere.", ""],
["Why integrate bots into construction?", "Micheal believes the Collective can revolutionize construction, aiding in design, safety, and efficiency.", ""],
["Can students interact with the Collective?", "Absolutely! Micheal's vision includes empowering students with AI tools to enhance their learning journey.", ""],
["How does the Collective aid brick and mortar businesses?", "Micheal sees the Collective assisting traditional businesses in modernizing and optimizing their operations.", ""],
["Is there a mobile version of the Collective?", "Micheal is working on integrating the Collective seamlessly into mobile devices for on-the-go assistance.", ""],
["How can construction projects benefit from AI?", "With the Collective, construction projects can gain insights, improve safety protocols, and optimize workflows.", ""],
["Are there educational programs with the Collective?", "Micheal is keen on introducing the Collective into educational curriculums, offering students a futuristic learning tool.", ""],
["How does offline functionality help?", "Micheal understands the value of accessibility. Offline functionality ensures the Collective assists even in remote or internet-limited areas.", ""],
["Can the Collective assist in classroom settings?", "Yes, Micheal envisions the Collective as a classroom assistant, aiding both teachers and students.", ""],
["How will phones evolve with the Collective?", "Micheal believes phones integrated with the Collective will offer smarter assistance, enhancing user experience.", ""],
["What's the future of construction with the Collective?", "Micheal sees a future where construction is more efficient, safe, and innovative with the Collective's insights.", ""],
["How can traditional businesses adapt with the Collective?", "Micheal's vision includes helping brick and mortar businesses modernize with AI-driven solutions.", ""],
["Are there any pilot programs for schools?", "Micheal is exploring pilot programs to introduce the Collective into educational institutions and gauge its impact.", ""],
["How does the Collective handle offline queries?", "Designed for offline use, the Collective can process and respond to queries without needing an active internet connection.", ""],
["Can the Collective be integrated into construction software?", "Yes, Micheal aims to integrate the Collective into construction software, offering real-time AI insights.", ""],
["How will the Collective change mobile experiences?", "Micheal believes the Collective will make mobile interactions more intuitive, personalized, and efficient.", ""],
["Are there training sessions for educators?", "Micheal plans to offer training sessions, ensuring educators harness the Collective's potential effectively.", ""],
["How does the Collective support brick and mortar stores?", "Micheal envisions the Collective offering insights, customer trends, and operational efficiency to traditional stores.", ""],
["Micheal's recommendations?", "Micheal advocates for ethical AI use, emphasizing transparency and user empowerment.", ""],
["How to collaborate?", "Reach out directly to Micheal for partnership and collaboration opportunities.", ""],
["Micheal's testimonials?", "Many clients praise Micheal's innovative approach and the effectiveness of the Collective.", ""],
["Why the name 'Collective'?", "The name reflects the amalgamation of diverse insights and data, championed by Micheal.", ""],
["Micheal's challenges?", "Transitioning from remodeling to AI posed challenges, but Micheal's resilience prevailed.", ""],
["Updates from Micheal?", "Stay tuned to the website and newsletters for Micheal's insights and updates.", ""],
["Micheal's AI philosophy?", "Micheal believes in AI that complements human abilities, ensuring mutual growth.", ""],
["How to meet Micheal?", "Events, webinars, and direct contact options are available for interactions with Micheal.", ""],
["Micheal's mentors?", "Throughout his journey, Micheal has been influenced by leading thinkers in AI and tech.", ""],
["Micheal's community work?", "Micheal is involved in various community initiatives, promoting AI education and awareness.", ""],
["How is feedback used?", "Micheal values feedback, using it to refine and enhance the Collective's offerings.", ""],
["Micheal's awards?", "Micheal's contributions to AI have been recognized by various institutions and platforms.", ""],
["Training with Micheal?", "Micheal offers training sessions to help integrate the Collective effectively.", ""],
["Micheal's network?", "Micheal is connected with AI experts globally, ensuring the Collective's continuous evolution.", ""],
["How is data used?", "Under Micheal's guidance, data is used ethically, prioritizing user privacy and security.", ""],
["Micheal's publications?", "Micheal shares his insights through articles, blogs, and papers on AI and its applications.", ""],
["Micheal's conferences?", "Micheal often speaks at conferences, sharing his vision for the future of AI.", ""],
["How to join Micheal's team?", "Opportunities to work with Micheal and the Collective are shared on the official platform.", ""],
["Micheal's goals?", "Micheal aims to make AI accessible, ethical, and beneficial for all.", ""],
["Micheal's education?", "Micheal's diverse educational background fuels his unique approach to AI.", ""],
["How to invest?", "For investment opportunities in Micheal's projects, direct contact is recommended.", ""],
["Micheal's tech stack?", "Micheal utilizes cutting-edge technologies to power the Collective and other projects.", ""],
["Micheal's partners?", "Micheal collaborates with industry leaders to enhance the Collective's offerings.", ""],
["Micheal's legacy?", "Micheal aspires to leave a lasting impact in the AI realm, benefiting generations to come.", ""],
    ["Who is Micheal Salmon?", "Micheal Salmon is the visionary behind the Collective, dedicated to integrating AI solutions for businesses and individuals.", ""],
["How can Micheal help?", "Micheal offers expertise in AI integration, ensuring seamless adoption of the Collective into various systems.", ""],
["What's Micheal's role?", "Micheal is the architect of the Collective, guiding its development and integration.", ""],
["Why trust Micheal?", "With a background in remodeling and a passion for AI, Micheal brings a unique perspective to AI integration.", ""],
["Micheal's experience?", "Micheal has successfully transitioned from remodeling to AI, showcasing adaptability and expertise.", ""],
["How to contact Micheal?", "You can reach out via the website or the provided contact details for personalized assistance.", ""],
["Micheal's vision?", "Micheal envisions a future where AI, like the Collective, enhances human capabilities and experiences.", ""],
["Why the pivot to AI?", "Recognizing AI's transformative potential, Micheal chose to focus on creating impactful AI solutions.", ""],
["Micheal's AI training?", "Micheal is committed to AI and Data schools, emphasizing the training of AI and ideological logic models.", ""],
["Integration challenges?", "With Micheal's guidance, integrating the Collective is made smoother, addressing potential challenges.", ""],
["Can Micheal customize the Collective?", "Yes, Micheal's expertise allows for tailored solutions to meet specific needs.", ""],
["Micheal's background?", "From remodeling to AI, Micheal's journey showcases innovation and adaptability.", ""],
["How does Micheal view AI?", "For Micheal, AI is not just a tool but a partner in progress, enhancing human potential.", ""],
["Micheal's support?", "Micheal offers continuous support, ensuring the Collective aligns with your goals.", ""],
["Why choose Micheal's Collective?", "The Collective, under Micheal's vision, offers a unique blend of human touch and AI efficiency.", ""],
["how old is the earth", "The Earth is approximately 4.54 billion years old.", ""]
]

;
  let conversationData = [];


  function levenshtein(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;

      let matrix = [];

      for (let i = 0; i <= b.length; i++) {
          matrix[i] = [i];
      }

      for (let j = 0; j <= a.length; j++) {
          matrix[0][j] = j;
      }

      for (let i = 1; i <= b.length; i++) {
          for (let j = 1; j <= a.length; j++) {
              if (b.charAt(i - 1) === a.charAt(j - 1)) {
                  matrix[i][j] = matrix[i - 1][j - 1];
              } else {
                  matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
              }
          }
      }

      return matrix[b.length][a.length];
  }

  function getClosestQuestion(input, data) {
      let closestQuestion = null;
      let minDistance = Infinity;

      for (const entry of data) {
          const distance = levenshtein(input, entry[0]);
          if (distance < minDistance) {
              minDistance = distance;
              closestQuestion = entry[0];
          }
      }

      return closestQuestion;
  }


  window.levenshtein = levenshtein;
  window.getClosestQuestion = getClosestQuestion;

  function parseCollectiveCommand(data) {
      const collectiveRegex = /cmd \[([a-z]+)\] \[(\d+)\] \[([a-z]+)\]/i;
      const match = data.match(collectiveRegex);

      if (match) {
        const action = match[1];
        const value = parseInt(match[2], 10);
        const category = match[3];

        executeCollectiveAction(action, value, category);
        return true; // Command was recognized
      }
      return false; // Command was not recognized
  }
  window.sendMessage = function() {
      const inputElem = document.getElementById('userInput');
      const message = inputElem.value;
      inputElem.value = '';

      const chatWindow = document.getElementById('chatWindow');
      chatWindow.innerHTML += '<p>User: ' + message + '</p>';
      chatWindow.scrollTop = chatWindow.scrollHeight;

      // Check if the message is for @faxium
      if (message.toLowerCase().includes('@faxium')) {
          sendFaxiumMessage(message, 'User');
          chatWindow.scrollTop = chatWindow.scrollHeight;
          return; // Exit the function after processing the message for @faxium
      }

      // Add thinking animation
      const thinkingElem = document.createElement('p');
      thinkingElem.classList.add('thinking');
      thinkingElem.innerHTML = 'Collective';
      chatWindow.appendChild(thinkingElem);
      chatWindow.scrollTop = chatWindow.scrollHeight;

      setTimeout(() => {
          // Remove thinking animation
          chatWindow.removeChild(thinkingElem);

          if (parseCollectiveCommand(message)) {
              chatWindow.innerHTML += '<p>Collective: Command accepted</p>';
              chatWindow.scrollTop = chatWindow.scrollHeight;
          } else {
              const response = getResponse(message);
              if (response) {  // Only display if there's a response
                  chatWindow.innerHTML += '<p>Collective: ' + response + '</p>';
                  chatWindow.scrollTop = chatWindow.scrollHeight;
              } else {
                  chatWindow.innerHTML += '<p>Collective: Command not accepted</p>';
                  chatWindow.scrollTop = chatWindow.scrollHeight;
              }
          }

          // Check for redundancy before updating the conversationData
          if (!isRedundant(message, response)) {
              conversationData.push([message, response, ""]);
          }

          // Update the JSON editor to reflect the changes
          updateJSONDisplay();

          chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 1000); // Half-second delay
  }




  function isRedundant(question, answer) {
    for (const entry of conversationData) {
      if (entry[0] === question && entry[1] === answer) {
        return true;
      }
    }
    return false;
  }

  function getResponse(message) {

      // Convert the message to lowercase for case-insensitive check
      const lowercaseMessage = message.toLowerCase();

      // If the message is intended for @faxium, don't respond
      if (lowercaseMessage.includes('@faxium')) {
          return null;
      }

      let response = searchInData(message, baseData);
      if (!response) {
          response = searchInData(message, conversationData);
      }
      if (!response) {
          return 'I can\'t answer that until you provide me with an Updated OS.';
      }
      return response;
  }


  function searchInData(message, data) {
      const closestQuestion = getClosestQuestion(message, data);
      for (const entry of data) {
          if (entry[0] === closestQuestion) {
              return entry[1];
          }
      }
      return null;
  }

  function updateJSONDisplay() {
      const jsonEditor = document.getElementById('jsonEditor');
      jsonEditor.value = JSON.stringify(conversationData, null, 2);
  }

  function isValidDataFormat(data) {
      if (!Array.isArray(data)) {
          return false;
      }
      for (const entry of data) {
          if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== 'string' || typeof entry[1] !== 'string' || typeof entry[2] !== 'string') {
              return false;
          }
      }
      return true;
  }

  function importBaseDataSet(event) {
      const files = event.target.files;
      if (files.length === 0) {
          alert("No file selected. Please select a file and try again.");
          return;
      }
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
          try {
              const importedData = JSON.parse(e.target.result);
              if (isValidDataFormat(importedData)) {
                  baseData = importedData;
                  event.target.disabled = true; // Disable the base data set input after uploading
              } else {
                  alert("The imported data does not match the expected format.");
              }
          } catch (error) {
              alert("Error parsing base data set: " + error.message);
          }
      };
      reader.readAsText(file);
  }

  function importConversationDataSet(event) {
      const files = event.target.files;
      if (files.length === 0) {
          alert("No file selected. Please select a file and try again.");
          return;
      }
      const file = files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
          try {
              const importedData = JSON.parse(e.target.result);
              if (isValidDataFormat(importedData)) {
                  conversationData = importedData;
                  updateJSONDisplay();
              } else {
                  alert("The imported data does not match the expected format.");
              }
          } catch (error) {
              alert("Error parsing conversation data set: " + error.message);
          }
      };
      reader.readAsText(file);
  }

  function compileAndExportJSON() {
      const jsonEditor = document.getElementById('jsonEditor');
      const blob = new Blob([jsonEditor.value], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'compiledData.json';
      a.click();
  }

  function updateConversationData() {
      const jsonEditor = document.getElementById('jsonEditor');
      try {
          const newData = JSON.parse(jsonEditor.value);
          if (Array.isArray(newData)) {
              let validEntries = 0;
              for (const entry of newData) {
                  if (Array.isArray(entry) && entry.length === 3) {
                      conversationData.push(entry);
                      validEntries++;
                  }
              }
              if (validEntries > 0) {
                  updateJSONDisplay();
                  alert("Data updated successfully!");
              } else {
                  alert("Invalid data format. Please ensure you have the format [question, answer, liveChange].");
              }
          } else {
              alert("Invalid data format. Please ensure you have the format [question, answer, liveChange].");
          }
      } catch (error) {
          alert("Error updating data: " + error.message);
      }
  }



  function executeCollectiveAction(action, value, category) {
    switch (action.toLowerCase()) {
      case 'add':
        postMessageToParent(value, category);
        break;
      case 'subtract':
        postMessageToParent(-value, category);
        break;
      default:
        console.error('Invalid action:', action);
    }
  }

  function postMessageToParent(value, category) {
    const message = {};
    message[category] = value;
    window.parent.postMessage(message, 'https://woodandmortar.com/');
  }

  // Usage:
  // parseCollectiveCommand("Some chat data cmd [add] [10000] [nationalist]");
  // parseCollectiveCommand("Another example cmd [subtract] [10000][populist]");





let website1 = 'https://www.getgptlaw.com/';
let website2 = 'https://www.getgptlaw.com/';


  // List of questions 'faxium' will ask
  const collectiveQuestions = [
    'What do you need to improve your housing situation? <button class="open-modal" onclick="window.open(website1)">lease agreements</button><button class="open-modal" onclick="window.open(website2)">find a contractor</button><button class="open-modal" onclick="window.open(website1)">legal aid</button><button class="open-modal" onclick="shoppingActive()">new property</button>'
  ];

  function askChatbotOnce() {
    chatWindow.scrollTop = chatWindow.scrollHeight;
    chatWindow.innerHTML += '<p>Collective: ' + collectiveQuestions[0] + '</p>';
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  setTimeout(askChatbotOnce, 1000);




























  function closeTab() {
    document.getElementById("introTab").style.display = "none";
  }

  function openQuest1(){
      document.getElementById("secretDiv").style.display = "block";
      startGame();
      startGame2();
      document.getElementById("schedule").style.display = "none";
      document.getElementById("shopping").style.display = "none";
      let intervalId; // To store the interval ID

  function checkComplete() {
      if (document.getElementById('finalNumber').innerHTML === "Complete" &&
          document.getElementById('finalNumber2').innerHTML === "Complete" &&
          document.getElementById('finalNumber3').innerHTML === "Complete") {
          alert("You see password: reset017 written on a folder");
          clearInterval(intervalId); // Stop the interval
      }
  }

  // Start checking every second
  intervalId = setInterval(checkComplete, 1000);

  // Stop checking after 60 seconds
  setTimeout(() => {
      clearInterval(intervalId);
  }, 60000);

  }

  function closeQuest1() {
    document.getElementById("quest1").style.display = "none";
  }



  let currentStep = 0;

                  function startGame(){

                      const progressBar = document.getElementById('tBoxProgress');
                      const progressText = document.getElementById('tPercentInput');
                      alert('Critical notice! Population decrease exponentially increased due to quest logic, Crisis Level: 3 - expecting new .HPXML parameters to continue.');
                      status = 3;
                      function updateProgressBar(progress) {
                          progressBar.style.width = progress + '%';
                          progressText.textContent = Math.round(progress) + '%';
                      }

                      function simulateProgress(duration) {
                          const interval = 20; // Time interval for updating progress in milliseconds
                          const totalSteps = 100;
                          const steps = Math.floor(duration / interval);
                          const stepSize = totalSteps / steps;


                          const progressInterval = setInterval(() => {
                              currentStep += stepSize;
                              updateProgressBar(currentStep);

                              if (currentStep >= 100) {
                                  clearInterval(progressInterval);
                                  document.getElementById('finalNumber').innerHTML = "Failed";
                              }
                          }, interval);
                      }

                      simulateProgress(20000); // 20 seconds in milliseconds


                                      }


                                      let counter = 1;
                                      const targetCount = 5;

                                      function increaseCounter() {
                                          counter++;
                                          document.getElementById('daysCounter').textContent = counter;

                                          if (counter === targetCount) {
                                              document.getElementById('finalNumber').innerHTML = "Complete";
                                                currentStep -= 50;
                                                updateProgressBar(currentStep);
                                          }
                                      }



                                      let currentStep2 = 0;

                                                    function startGame2(){

                                                        const progressBar2 = document.getElementById('tBoxProgress2');
                                                        const progressText2 = document.getElementById('tPercentInput2');

                                                        function updateProgressBar2(progress2) {
                                                            progressBar2.style.width = progress2 + '%';
                                                            progressText2.textContent = Math.round(progress2) + '%';
                                                        }

                                                        function simulateProgress2(duration2) {
                                                            const interval2 = 20; // Time interval for updating progress in milliseconds
                                                            const totalSteps2 = 100;
                                                            const steps2 = Math.floor(duration2 / interval2);
                                                            const stepSize2 = totalSteps2 / steps2;


                                                            const progressInterval2 = setInterval(() => {
                                                                currentStep2 += stepSize2;
                                                                updateProgressBar2(currentStep2);

                                                                if (currentStep2 >= 100) {
                                                                    clearInterval(progressInterval2);
                                                                    document.getElementById('finalNumber2').innerHTML = "Failed";
                                                                }
                                                            }, interval2);
                                                        }

                                                        simulateProgress2(20000); // 20 seconds in milliseconds


                                                                        }


                                                                        let counter2 = 1;
                                                                        const targetCount2 = 13;

                                                                        function increaseCounter2() {
                                                                            counter2++;
                                                                            document.getElementById('daysCounter2').textContent = counter2;

                                                                            if (counter2 === targetCount2) {
                                                                                document.getElementById('finalNumber2').innerHTML = "Complete";
                                                                                  currentStep2 -= 50;
                                                                                  updateProgressBar2(currentStep2);
                                                                            }
                                                                        }




                       const minNumber = 1;
                       const maxNumber = 20;
                       let targetNumber = generateRandomNumber(minNumber, maxNumber);
                       let attempts = 0;

                       function generateRandomNumber(min, max) {
                           return Math.floor(Math.random() * (max - min + 1)) + min;
                       }

                       function checkGuess() {
                           const guessInput = document.getElementById('guessInput');
                           const message = document.getElementById('message');
                           const userGuess = parseInt(guessInput.value);

                           if (isNaN(userGuess)) {
                               message.textContent = "Please enter a valid number.";
                               return;
                           }

                           attempts++;

                           if (userGuess === targetNumber) {
                               message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
                               targetNumber = generateRandomNumber(minNumber, maxNumber);
                               attempts = 0;
                               document.getElementById('finalNumber3').innerHTML = "Complete";
                           } else if (userGuess < targetNumber) {
                               message.textContent = "Try a higher number.";
                           } else {
                               message.textContent = "Try a lower number.";
                           }

                           guessInput.value = '';
                           guessInput.focus();
                       }



  function quest2() {
  alert('Critical notice! Population decrease exponentially increased due to quest logic, Crisis Level: 3 - Terminate with password.');
  globeActive();
  rotationSpeed2 = 0.0000445;
  document.getElementById('quest2password').style.display = "block";
  status = 3;
  }
