(function() {
  //   JQuery
  //   JQuery AutoTab Magic

  // Form Parent
  var clearInputs, form, formInputs, inputCode, validCode, validCode2, validCode3, validateCode;

  form = $(".code_input");

  // Form Inputs
  formInputs = $(form).children("input");

  // Valid Code
  validCode = "1234";
  validCode2 = "0695";
  validCode3 = "3234";

  //JQuery AutoTab to automatically move forward when maximum length of input is reached.
  $(formInputs).autotab_magic();

  // Returns the code which is inputted into each of the form inputs
  inputCode = function() {
    var code;
    code = []; // Blank array (probably a better way to do this
    $(formInputs).each(function() { // Selects each form input object
      return code.push($(this).val()); // Pushes each form input value to the [code] array
    });
    return code.join(""); // Returns the code array in string form (joined)
  };


  // Checks the code which is returned from inputCode()
  validateCode = function() {
    var c;
    c = inputCode(); // Runs inputCode() to have a code string to validate
    if (c === validCode) { // Checks code against validCode variable
      $(form).removeClass("error").addClass("success"); // Adds success class and removes error class from form
      $(".hint").fadeOut(); // Hides the hint
      return false; // End of successful code input
    } else if (c === validCode2) { // Checks if code is 4 digits long
      document.location.href = 'crycella.html'
      return false; // Shows the hint
    } else if (c === validCode3) { // Checks if code is 4 digits long
      document.location.href = 'sean.html'
      return false; // Shows the hint
    } else {
      $(form).addClass("error").removeClass("success"); // Adds error class, removes success class from form
      return false; // End of unsuccessful input
    }
  };


  // Clears out all the inputs and sets the focus to the first one
  clearInputs = function() {
    $(formInputs).first().focus(); // Set focus to first input
    $(formInputs).val(""); // Sets input values to null
    return $(form).removeClass(); // Remove classes from form
  };


  // Initiates code validation if the key pressed isn't backspace or delete
  $(formInputs).keyup(function() { // On keyup in any of the form inputs
    if (event.keyCode === 8 || event.keyCode === 46) { // Maps to the backspace and delete key
      clearInputs(); // Clears the form
      return false; // End of backspace event
    } else {
      return validateCode(); // Run validation function
    }
  });


  // Clears form when clicking any of the form inputs
  $(formInputs).click(function() {
    return clearInputs(); // Clears form
  });

}).call(this);
