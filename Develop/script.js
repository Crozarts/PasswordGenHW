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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "+", "*", ",", "/", "@", "?"]
// ask user length of password
// check the length meeting minimum requirement 
// confirm user for character sets ; uppercase lowercase special and numbers
// each confirm store to variable
// based on prompts create a pool(array or string) of characterset
// generate random number as index to the pool 