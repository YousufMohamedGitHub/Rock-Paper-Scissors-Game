var userscore = 0;
var computerscore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
const choices = ["r","p","s"];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];


}
function Converts(letter) {
if (letter == "r") return "Rock";
if (letter == "p") return "Paper";
if (letter == "s") return "Scissors";

}
function win(user,computer) {
  userscore++;
  userScore_span.innerHTML = userscore;
  computerScore_span.innerHTML = computerscore;


result_div.innerHTML = Converts(user) + "  beats  " + Converts(computer) + " . YOU WIN!"
 document.getElementById(user).classList.add("greenglow")  ;
 setTimeout(function() {document.getElementById(user).classList.remove("greenglow") }, 300);



}

function lose(user,computer) {

  computerscore++;
  userScore_span.innerHTML = userscore;
  computerScore_span.innerHTML = computerscore;
result_div.innerHTML = Converts(computer) + "  beats  " + Converts(user) + " . YOU LOSE!"

document.getElementById(user).classList.add("red-glow")  ;
setTimeout(function() {document.getElementById(user).classList.remove("red-glow") }, 300);


}


function draw(user) {
  result_div.innerHTML =  " It's a DRAW "
  document.getElementById(user).classList.add("gray-glow")  ;
  setTimeout(function() {document.getElementById(user).classList.remove("gray-glow") }, 300);

console.log("DRAW");
}


function game(userChoice,user2) {

  var pic = document.getElementById(userChoice+"2").src;
  document.getElementById("userss").src = pic;
const computerchoice = getComputerChoice();
var pic2 = document.getElementById(computerchoice+"2").src;
document.getElementById("compss").src = pic2;

switch (userChoice + computerchoice) {
  case "rs":
  case "sp":
  case "pr":
win(userChoice, computerchoice,user2);
    break;
case "rp":
case "sr":
case "ps":
console.log("LOSE");
lose(userChoice, computerchoice);
break;

case "rr":
case "ss":
case "pp":
draw(userChoice);
break;

}

}

function main() {
rock_div.addEventListener('click', function () {

  game("r","r2");
})

paper_div.addEventListener('click', function () {

game("p","p2");

})

scissors_div.addEventListener('click', function () {

game("s","s2");

})

}

main();
