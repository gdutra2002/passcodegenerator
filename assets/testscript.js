
var specialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|','/','?',"'",'"',";",':',",",'<','.','>'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getPasswordOptions() {

var length = parseInt(
      prompt('How many characters would you like your password to contain?'),
      10);
if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;}
if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;}
if (length > 128) {
      alert('Password length must less than 129 characters');
      return null;}

      // function functionConfirm(msg, myYes, myNo, cancel) {
      //       var confirmBox = $("#confirm");
      //       confirmBox.find(".message").text(msg);
      //       confirmBox.find(".yes,.no,.cancel").unbind().click(function() {
      //          confirmBox.hide();
      //       });
      //       confirmBox.find(".yes").click(myYes);
      //       confirmBox.find(".no").click(myNo);
      //       confirmBox.find(".no").click(cancel);
      //       confirmBox.show();
      //    }

      
var hasSpecialCharacters = confirm(
      'Click OK to confirm including special characters.');
var hasNumericCharacters = confirm(
      'Click OK to confirm including numeric characters.');
var hasLowerCasedCharacters = confirm(
      'Click OK to confirm including lowercase characters.');
var hasUpperCasedCharacters = confirm(
      'Click OK to confirm including uppercase characters.');

if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false) {
      alert('Must select at least one character type');
      return null;}

var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,};
  
    return passwordOptions;}

function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
      return randElement;}

function generatePassword() {
      var options = getPasswordOptions();
   // var options = functionConfirm();

var result = [];

var possibleCharacters = [];
      
var guaranteedCharacters = [];      
      
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

for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);}

for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];}

return result.join('');}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

generateBtn.addEventListener("click", writePassword);

// https://www.tutorialspoint.com/How-to-create-JavaScript-alert-with-3-buttons-Yes-No-and-Cancel