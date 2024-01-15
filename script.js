// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  // criteria prompt for password length and verify between 8 and 128
  // Used Logical or || - learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

  var passwordLength = prompt("Enter the password length:");

  // stuck on this part.  doesnt seem to be working (cant figure out isNaN and return)
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength))
    alert("Please enter a number between 8 and 128.");
  // return;

  // Vars with Prompts to confirm PW criteria of Upper case, Lower case, numbers and or special characters

  var includeUppercase = confirm("Include Upper case characters?");
  var includeLowercase = confirm("Include Lower Case characters?");
  var includeSpecialChars = confirm("Include special characters?");
  var includeNumbers = confirm("Include Numbers?");

  // Vars with values for Criterias

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "!@#$%^&*()-_=+<>?/[]{}";
  var numberChar = "1234567890";

  // Having trouble with this (can this be done with a Var Array?)
  var char = "";
  if (includeUppercase) char += upperCase;
  if (includeLowercase) char += lowerCase;
  if (includeSpecialChars) char += specialChar;
  if (includeNumbers) char += numberChar;

  //verify at least one character set is included, Alert and return if not

  if (char === "") {
    alert("Please select at least one character type.");
    return;
  }

  // var for password 
  // Used for loop and math.random to generate password

  var password ="";
  for (var i= 0; i < passwordLength; i++) 
  {var randomIndex = Math.floor (Math.random() * char.length);
    password +=char.charAt(randomIndex)
  }
  
  return password;
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


