// Assignment code here

// var Characters =[ ... ]; define what are the allowed values of the output.
var specialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','/','?',"'",'"',";",':',",",'<','.','>'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// fn getPasswordOptions defines the parameters, if selected by the user to be applied.
function getPasswordOptions() {
// The initial condition the end user must satisfy to procede is password length.
var length = parseInt(
      prompt('How many characters would you like your password to contain?'),
      12);
if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;}
if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;}
if (length > 128) {
      alert('Password length must less than 129 characters');
      return null;}
// The next quadrant of parameters are first defined including an prompt output message,
var hasSpecialCharacters = confirm(
      'Click OK to confirm including special characters.');
var hasNumericCharacters = confirm(
      'Click OK to confirm including numeric characters.');
var hasLowerCasedCharacters = confirm(
      'Click OK to confirm including lowercase characters.');
var hasUpperCasedCharacters = confirm(
      'Click OK to confirm including uppercase characters.');
// then qualified with a boolean operator to stop the function if all 4 are false.
if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false) {
      alert('Must select at least one character type');
      return null;}
// If at lease 1 of 4 parameter conditions are met, those parameters become the variable passwordOptions.
var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,};
    return passwordOptions;}

// The random number generator is presented: calling the variable length as described above.
function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
      return randElement;}

// The password generator is explcitly defined as a function based upon all the above described options.
function generatePassword() {
      var options = getPasswordOptions();

// The three variable of the function are below, the var result is dependent, possible and gaurenteed are independent. 
var result = [];

var possibleCharacters = [];
      
var guaranteedCharacters = [];      

// Given the above options, arrays are created with the random function.
if (!options) return null;      
      
if (options.hasSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));}     
      
if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));}      
      
if (options.hasLowerCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));}     
      
if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));}   

// The two independent variables arrays are defined from the option arrays.
for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);}

for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];}
// The dependent variable result transforms the arrays into a string. This is the 'password.'
return result.join('');
}

// Get references to the #generate element in the html.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input displayed to the user.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button, awaits the users mouse click.
generateBtn.addEventListener("click", writePassword);