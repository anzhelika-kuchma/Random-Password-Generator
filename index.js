const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passrordElFirst = document.getElementById("password-el-1");
let passrordElSecond = document.getElementById("password-el-2");
let firstPassworArray = [];
let secondPassworArray = [];
  let firstPassword = "";
  let secondPassword = "";

function getArrayOfNumbers() {

  for (let i = 0; i < 15; i++) {
  firstPassworArray.push(Math.floor(Math.random() * 91));
  secondPassworArray.push(Math.floor(Math.random() * 91));
  }

  generatePassword()
}

function generatePassword () {
  let number;
  
  for (let i = 0; i < 15; i++) {
    number = firstPassworArray[i];
    firstPassword += characters[number];

    number = secondPassworArray[i];
    secondPassword += characters[number];

  }

   passrordElFirst.textContent = firstPassword;
   passrordElSecond.textContent = secondPassword;
}

 
  