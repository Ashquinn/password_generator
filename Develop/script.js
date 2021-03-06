// Lower case letter array for retrieval 
const lowerCased = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCased = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "?", "<", ">", ",", ".", ":", ";", "[", "]", "/"]


//Prompt "How many characters would you like in your password"


//Prompt "Password must contain atleast 8 characters"


//Prompt "Password must be no longer than 128 characters"


//"Would you like lower cased letters in your password"

//"Would you like upper cased letters in your password"

//"Would you like special characters in your password"

//"Would you like numbers in your password"


































var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
