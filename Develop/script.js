// Lower case letter array for retrieval 
const lowerCased = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperCased = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "?", "<", ">", ",", ".", ":", ";", "[", "]", "/"]


//Prompt "How many characters would you like in your password"
function getUserInputPasswordLength(){
  let userNumInput = parseInt(prompt("How many characters would you like in your password?"
  ));
  if (isNaN(userNumInput)){
    alert("Input must be a number!");
    getUserInputPasswordLength();
  } else {

    //Alert "Password must contain atleast 8 characters"
    if (userNumInput < 8){
      alert("Password must be a minimum of 8 characters")
      getUserInputPasswordLength()

      //Alert "Password must be no longer than 128 characters"
    } else if (userNumInput > 128){
      alert("Password must be no greater than 128 characters")
    } else{
      return userNumInput;
    }
}


let confirmedNumber = getUserInputPasswordLength()
console.log(confirmedNumber)
//Confirm "Would you like lower cased letters in your password"

//Confirm"Would you like upper cased letters in your password"

//Confirm "Would you like special characters in your password"

//Confirm "Would you like numerical characters in your password"


//Need a function to iterate through each array depending on users response



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
