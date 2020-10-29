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

// Add variables for confirm prompts
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var passwordLength;
// based on prompts create a pool(array or string) of characterset
var passwordStr;


// create data for character sets ; array or string
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "+", "*", ",", "/", "@", "?"];

function generatePassword() {
  // ask user length of password
  passwordLength = prompt("How many character would you like your password between 8 - 128");

 // check the length meeting minimum requirement 

 if (passwordLength < 8 || passwordLength > 128) {
  alert("please select a number BETWEEN 8 and 128");
  }
 // confirm user for character sets ; uppercase lowercase special and numbers
  else { 
  confirmNumber = confirm("Would you like to use numbers?");
  confirmCharacter = confirm("would you like to use special characters?");
  confirmLowercase = confirm("would you like to use Lowercase letters?");
  confirmUppercase = confirm("would you like to use Uppercase letters?");
  }
  
  // Added alert for Negative confirm input
  if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
    alert("Please select one of the following (Special character, number, lowercase letters, uppercase letters!!!!")
  }
  // each confirm stores to variable

}
// generate random number as index to the pool 