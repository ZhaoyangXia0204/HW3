// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword() {
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var ENG = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var eng = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var spec = ["!", "@", "#", "$", "%", "&", "*"];
  var legit = parseInt(prompt("How many legits do you want?"));
  console.log(legit);
  var isNum = confirm("Do you want numbers?");
  var isLow = confirm("Do you want lowercase?");
  var isUp = confirm("Do you want Uppercase?");
  var isSpec = confirm("Do you want special characters?");
 var NewArr=[];
  if (isNum === true) {
    NewArr=NewArr.concat(num);
    console.log(NewArr);
  }
  if (isLow === true) {
    NewArr=NewArr.concat(eng);
    console.log(NewArr);
  }
  if (isUp === true) {
    NewArr=NewArr.concat(ENG);
    console.log(NewArr);
  }
  if (isSpec === true) {
    NewArr=NewArr.concat(spec);
    console.log(NewArr);
  }


  var arr = []
  for (i=0; i<legit;i++){
    arr.push(NewArr[Math.floor(Math.random() * NewArr.length)]);
  }
  console.log(arr);
  console.log(arr.join(""));

  var pwd = arr.join("");
  console.log(pwd)
  return pwd;

  
 

  

}
