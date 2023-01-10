// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var length = 0;
var upper = false;
var numeric = false;
var specials = false;
var lengthPrompt = "How long would you like your password? (number): ";

// Function to prompt user for password options
function getPasswordOptions() {
  //pasword options include Length, Character types (LC, UC, Numeric, SC)
  length = prompt(lengthPrompt)
  while (length === null) length = prompt(lengthPrompt);
  // check if prompt is number, if not, prompt AGAIN
  while (isNaN(length) || parseInt(length) < 10 || parseInt(length) > 64){
    alert("Please enter only numbers between 10 and 64");
    length = prompt(lengthPrompt);
  }
  upper = confirm("Would you like uppercase characters?");
  numeric = confirm("Would you like numeric characters?");
  specials = confirm("Would you like special characters?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  // create a new array with the length of the length
  var characterArray = Array();
  // concatenate the possible characters based on user options
  var possibleChars = Array();
  if (upper) possibleChars = possibleChars.concat(upperCasedCharacters);
  if (numeric) possibleChars = possibleChars.concat(numericCharacters);
  if (specials) possibleChars = possibleChars.concat(specialCharacters);
  possibleChars = possibleChars.concat(lowerCasedCharacters);

  for (var i = 0; i < length; i++){
    // loop over the length of the array and parse the selected options in.
    characterArray[i] = getRandom(possibleChars);
  }
  
  // return the final password as a string
  return characterArray.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);