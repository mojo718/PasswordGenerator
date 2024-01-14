// Assignment Code
var generateBtn = document.querySelector("#generate");
// 1 write a funtuction to generate a password
// 2 create Vars for password criteria (characters, number length etc)

function generatePassword() {
var generatePassword 

}
// Assign Vars for password charactors and password length



var passlength = confirm("How Many Characters?");


// Write password to the #password input
function writePassword() {
  var passlength = confirm("How Many Characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passlength = confirm("How Many Characters?")
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
