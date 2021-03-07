// Lower case letter array for retrieval 
const lowerCased = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCased = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "?", "<", ">", ",", ".", ":", ";", "[", "]", "/"]


//Prompt "How many characters would you like in your password"
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

//Randon function attempt
function randomize(characters) {
  return characters[Math.floor(Math.random()*characters.length)]
}











//My attempt to create function

function createPassword(){
  let options = getUserInputPasswordLength();
  let characterOptions = []

  if (options.includeLowerCasedCharacters) {
    characterOptions = characterOptions.concat(lowerCased)
  }
  if (options.includeUpperCasedCharacters) {
    characterOptions = characterOptions.concat(upperCased)
  }
  if (options.includeSpecialCharacters) {
    characterOptions = characterOptions.concat(specialCharacter)
  }
  if (options.includeNumericalCharacters) {
    characterOptions = characterOptions.concat(numbers)
  }
  //for (let i = 0; i < passwordLength, i++) {
    
  }



//}

createPassword()
//Need a function to iterate through each array depending on users response

var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
