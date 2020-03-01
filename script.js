// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());


//GeneratePassword function

function generatePassword() {

var fullAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?"];

  var lengthConfirm = confirm("Welcome to CyberSecomb's password generator. Would you like to include a length criteria in your password?");
    if (lengthConfirm === true) {
      var lengthChoice;
      //while loop prompts user to enter number between 8 and 128.
      while(lengthChoice < 8 || lengthChoice > 128 || isNaN(lengthChoice)) {
        lengthChoice = prompt("Please enter a password length between 8 and 128 characters");
      }
    }
    // if user does not choose a password length, one is chosen randomly between 8 and 128.
    else {
      lengthChoice = Math.floor((Math.random() * 120) + 8);
    }
  
  var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
    if (uppercaseConfirm === false) {
      fullAlphabet.splice(fullAlphabet.indexOf("A"), 26); //removes Caps from array
    }
      console.log(fullAlphabet);


  var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
    if (lowercaseConfirm === false) {
      fullAlphabet.splice(fullAlphabet.indexOf("a"), 26); //removes lowercase from array
      console.log(fullAlphabet);
    }

  var numericConfirm = confirm("Would you like to include numbers?");
    if (numericConfirm === false) {
      fullAlphabet.splice(fullAlphabet.indexOf("1"), 10); //removes numbers from array
      console.log(fullAlphabet);
    }

  var specialConfirm = confirm("Would you like to include special characters?");
    if (specialConfirm === false) {
      fullAlphabet.splice(fullAlphabet.indexOf("~"), 29); //removes special characters from array
      console.log(fullAlphabet);
    }

  //declares password variable as an empty array.  
  var password = []; 
  
  //for loop pushes random elements from user's chosen characterset into password array. pushes number or elements chosen by user store in lengthChoice variable.
  for (var i=0; i < lengthChoice; i++){
    var randomNumber = Math.floor(Math.random() * fullAlphabet.length);
    password.push(fullAlphabet[randomNumber]);
  }

  //stringPassword removes commas and spaces from password array.
  var stringPassword = password.join(""); 
  
  //declare variable that connects to password text in html file
  var passwordText = document.querySelector("#password");

  //sets value of this variable to our password in string form
  passwordText.value = stringPassword; 

}




