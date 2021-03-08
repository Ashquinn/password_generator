// Lower case letter array for retrieval 
const lowerCased = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Upper case letter array for retrieval 

const upperCased = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Number array for retrieval 
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Special character array for retrieval
const specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "?", "<", ">", ",", ".", ":", ";", "[", "]", "/"]


//Function used to grab the user's input. Will determine the length of the password the characters requested in the password. The function will return an object that holds key value paris for password criteria.
function getUserInputPasswordLength(){
  let passwordLength = parseInt(prompt("How many characters would you like in your password?"
  ));
  if (isNaN(passwordLength)){
    alert("Input must be a number!");
    getUserInputPasswordLength();
   } else {

    //Alert "Password must contain atleast 8 characters"
    if (passwordLength < 8){
      alert("Password must be a minimum of 8 characters")
      getUserInputPasswordLength()

      //Alert "Password must be no longer than 128 characters"
     } else if (passwordLength > 128){
      alert("Password must be no greater than 128 characters")
      getUserInputPasswordLength()
     } else{
       alert("Your password will be " + passwordLength + " characters long");
    }
  }
// Confirmation messages to determine the type of characters in the password.
  let includeSpecialCharacters = confirm('Click OK to include special characters.');

  let includeNumericCharacters = confirm('Click OK to include numeric characters.');

  let includeLowerCasedCharacters = confirm('Click OK to include lowercase characters.');

  let includeUpperCasedCharacters = confirm('Click OK to include uppercase characters.');

  let userPasswordOptions = {
    passwordLength: passwordLength,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters
  };
  return userPasswordOptions;
}

//Function dedicated for grabbing random characters from an array.
function randomize(characters) {
  return characters[Math.floor(Math.random()*characters.length)]
}

//This function contains multiple processes to create a password to the users liking. It utilizes the key value pairs from the object found in the function "getUserInputPasswordLength". With the data taken from the key value pairs, an array will be formed, consisting the entire range of possible characters the user wants in their password. Once the array is created there is a for loop that will iterate through the array and randomly select the number of characters the user has requested. The function concludes with returning the possible options in a single string. 
function createPassword(){
  let options = getUserInputPasswordLength();
  let characterOptions = []
  let possibleOptions = []


  if (options.includeLowerCasedCharacters) {
    possibleOptions = possibleOptions.concat(lowerCased)
  }
  if (options.includeUpperCasedCharacters) {
    possibleOptions = possibleOptions.concat(upperCased)
  }
  if (options.includeSpecialCharacters) {
    possibleOptions = possibleOptions.concat(specialCharacter)
  }
  if (options.includeNumericCharacters) {
    possibleOptions = possibleOptions.concat(numbers)
  }
  for (let i = 0; i < options.passwordLength; i++) {
    characterOptions.push(randomize(possibleOptions))
  }
  return characterOptions.join("")
}

//Varible that will serve as the event handler.
let generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = createPassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Adds an event listener the generateBtn. Upon the "click" event the writePassword function will activate.
generateBtn.addEventListener("click", writePassword);
