// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = password.join('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLen = prompt('How long do you want your password to be? Choose a number between 12 and 128')
  if (passwordLen < 12 || passwordLen > 128) {
    window.alert('You must choose a number between 12 and 128.')
    return generatePassword()
  } else if (isNaN(passwordLen)) {
    window.alert('Please choose a number')
    return generatePassword()
  }

  var number = confirm('Do you want numbers included?')
  var lowerCases = confirm('Would you like to use lowercase?')
  var upperCases = confirm('Would you like to use lowercase?')
  var special = confirm('Would you like to use special characters?')
  if (number === false && lowerCases === false && upperCases === false && special === false) {
    window.alert('Please choose one character type to continue.')
    return generatePassword()
  }

  var numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowerList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
  var upperList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var specialList = ['!', '@', '#', '$', '%', '^', '&', '*']

  var reqChars = []
  var finalPass = []
  var passOptions = []

  function randomPass(array) {
      var index = Math.floor(Math.random() * array.length)
      var element = array[index]
      return element
  }

  if (number === true) {
    passOptions = passOptions.concat(numList)
    reqChars.push(randomPass(numList))
  }

  if (lowerCases === true) {
    passOptions = passOptions.concat(lowerList)
    reqChars.push(randomPass(lowerList))
  }

  if (upperCases === true) {
    passOptions = passOptions.concat(upperList)
    reqChars.push(randomPass(upperList))
  }

  if (special === true) {
    passOptions = passOptions.concat(specialList)
    reqChars.push(randomPass(specialList))
  }

  
  for (let i = 0; i < passwordLen; i++) {
    let character = randomPass(passOptions)
    finalPass.push(character)
  }

  for (let i = 0; i < reqChars.length; i++) {
    finalPass[i] = reqChars[i]
  }

  
  console.log(reqChars)
  console.log(passOptions)
  return finalPass
}


