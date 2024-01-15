// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  // criteria prompt for password length and verify between 8 and 128
  // Used Logical or || - learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

  // var passwordLength = prompt("Enter the password length:");

  // if (passwordLength < 8 || passwordLength > 128 || isNan(passwordLength))
   
  //   alert("Please enter a number between 8 and 128.");
  //   return;

    // Vars with Prompts to confirm PW criteria of Upper case, Lower case, numbers and or special characters

    var includeUppercase = prompt("Include Upper case characters?");
    var includeLowercase = prompt("Include Lower Case characters?");
    var includeSpecialChars = prompt("Include special characters?");
    var includeNumbers = prompt("Include Numbers?");

    // Vars with values fos Criterias

    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var specialChar = "!@#$%^&*()-_=+<>?/[]{}";
    var numberChar = "1234567890";

  Var AllChars = [upperCase , lowerCase, specialChar, numberChar];


  

  return "some password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1 write a funtuction to generate a password
// 2 create Vars for password criteria character length in Function


