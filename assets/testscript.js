
// Characters define what are the allowed symbols of the output password.
var symbol = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','/','?',"'",'"',";",':',",",'<','.','>'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// fn getPwOptions defines the parameters, if selected by the user to be applied.
function getPwOptions() {
// The initial condition the end user must satisfy to procede is password length.
// Duodecimal base with parseFloat rounds up the requested length to a whole character.
var length = parseFloat(
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
var hasSymbol = confirm(
      'Click OK to affirm special characters.');
var hasNumeric = confirm(
      'Click OK to affirm numeric characters.');
var hasLowerChar = confirm(
      'Click OK to affirm lowercase characters.');
var hasUpperChar = confirm(
      'Click OK to affirm uppercase characters.');
// then qualified with a boolean operator to stop the function if all 4 are false.
if (
      hasSymbol === false &&
      hasNumeric === false &&
      hasLowerChar === false &&
      hasUpperChar === false) {
      alert('Must select at least one character type');
      return null;}
// If at lease 1 of 4 parameter conditions are met, those parameters become the variable password options.
var pwOptions = {
      length: length,
      hasSymbol: hasSymbol,
      hasNumeric: hasNumeric,
      hasLowerChar: hasLowerChar,
      hasUpperChar: hasUpperChar,};
      return pwOptions;}

// The random number generator is presented: calling the variable length as described above.
function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
      return randElement;}

// The password generator is explcitly defined as a function based upon all the above described options.
function generatePassword() {
      var options = getPwOptions();
// The three variable of the function are below, the var result is dependent, possible and gaurenteed are independent. 
var result = [];
var possibleChar = [];
var certainteedChar = [];      
// Given the above options, arrays are created with the random function.
if (!options) return null;      
if (options.hasSymbol) {
      possibleChar = possibleChar.concat(symbol);
      certainteedChar.push(getRandom(symbol));}        
if (options.hasNumeric) {
      possibleChar = possibleChar.concat(numeric);
      certainteedChar.push(getRandom(numeric));}         
if (options.hasLowerChar) {
      possibleChar = possibleChar.concat(lowerChar);
      certainteedChar.push(getRandom(lowerChar));}        
if (options.hasUpperChar) {
      possibleChar = possibleChar.concat(upperChar);
      certainteedChar.push(getRandom(upperChar));}   
// The two independent variables arrays are defined from the option arrays.
for (var i = 0; i < options.length; i++) {
      var Chaoxx = getRandom(possibleChar);
      result.push(Chaoxx);}
for (var i = 0; i < certainteedChar.length; i++) {
      result[i] = certainteedChar[i];}
// The dependent variable result transforms the arrays into a string. This is the 'password.'
return result.join('');}

// Get references to the #generate element in the html.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input displayed to the user.
function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;}

// Add event listener to generate button, awaits the users mouse click.
generateBtn.addEventListener("click", writePassword);