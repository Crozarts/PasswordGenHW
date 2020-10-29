// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create data for character sets ; array or string
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
specialChar = ["!", "#", "$", "%", "&", "(", ")", "+", "*", ",", "/", "@", "?"]
// ask user length of password
var passwordLength = prompt("How many character would you like your password between 8 - 128");

 if (Number(passwordLength < 8) + (passwordLength > 128)) {
  alert ("please select a number BETWEEN 8 and 128")
}


// check the length meeting minimum requirement 
// confirm user for character sets ; uppercase lowercase special and numbers
// each confirm store to variable
// based on prompts create a pool(array or string) of characterset
// generate random number as index to the pool 