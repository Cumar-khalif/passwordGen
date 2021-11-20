// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
function generatePassword() {
  
  var myPassword = ''
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '~', ':']
var UpperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var myLength = prompt('How many characters do you want for your password?');

while(myLength === '' || !parseInt(myLength) || myLength < 8 || myLength > 128) {
  myLength = prompt('Error! Please MAKE SURE PASSWORD LENGTH IS BETWEEN 8 AND 128 CHARACTERS');
}
 
 var containsLowerCases = confirm('Do you want lowercase characters?');

 
 var containsUpperCases = confirm('Do you want uppercase characters?');

 
 var containsNumbers = confirm('Do you want numbers?');

 var containsSpecialCharacters = confirm('Do you want special characters?');

 var finalPool = [];











};
