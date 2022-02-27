
// function that uses ascii character number variables to create an array of them for use.
//take the lower and upper numbers to give us a range of characters to use in pw
function arraySelector(low, high) {
  const array = []
  for (i = low; i <= high; i ++) {
    array.push(i)
  }
  return array
} 
// variables that give us intended characters
const lowerCodes = arraySelector(97, 122)
const upperCodes = arraySelector(65, 90)
const numberCodes = arraySelector(48, 57)
const symbolCodes = arraySelector(33, 47).concat(
  arraySelector(58, 64)
).concat(
  arraySelector(91, 96)
).concat(
  arraySelector(123, 126)
)

function generatePassword() {
  // window prompts take pw parameters from user thru window alerts.
  var passwordLength = window.prompt("How many characters would you like in your password? (Min 8, Max 128)")
    if (passwordLength)
  var includeUpper = window.confirm("Uppercase characters? ('Ok' for YES. 'Cancel' for NO.)")
  var includeNumbers = window.confirm("Numeric characters? ('Ok' for YES. 'Cancel' for NO.)")
  var includeSymbols = window.confirm("Symbol characters? ('Ok' for YES. 'Cancel' for NO.)")

  // always include lower-codes array and concatenate other arrays based on user input 
  charCodes = lowerCodes
  if (includeUpper === true) charCodes = charCodes.concat(upperCodes)
  if (includeNumbers === true) charCodes = charCodes.concat(numberCodes)
  if (includeSymbols === true) charCodes = charCodes.concat(symbolCodes)

  // loop uses 'random' function to select a random character from the array
  var passwordCharacters = []
  for (i=0; i <= passwordLength; i++) {
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(character))
  }
  // join those variables and return them as a cohesive password
  return passwordCharacters.join('')
}

// button = button on page
var generateBtn = document.querySelector("#generate");

// click button = write password
generateBtn.addEventListener("click", writePassword);

// run generatePassword and display it
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
