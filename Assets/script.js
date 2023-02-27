// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword(){
    let specialChar = confirm("Click OK to confirm including special characters.");
    let numbers = confirm("Click OK to confirm including numbers.");
    let upperCase = confirm("Click OK to confirm including uppercase characters.");
    let length = prompt("How many characters do you want?");//user's input.
  
    let charSet = "abcdefghijklmnopqrstuvwxyz";//basic charSet.
    let password = "";//an empty string for the output.
  
    if (specialChar) {//if true(confirm) add this charSet to the basic charSet.
      charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
  
    if (numbers) {//if true(confirm) add this charSet to the basic charSet.
      charSet += "0123456789";
    }
  
    if (upperCase) {//if true(confirm) add this charSet to the basic charSet.
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  
    for (let i = 0; i < length; i++) {//iterates the number of times of the length input,
      var random = Math.floor(Math.random() * charSet.length);//generates a single character each time,
      password += charSet[random];//adds a single character to the output each time generating.
    }
  
    return password;//returns the final result(output).

  }
  //define variables to pass the result to linked html for webpage to display.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
