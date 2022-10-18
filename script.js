var userChoice = prompt("Pick Heads or Tails")
let randomNumber = Math.floor(Math.random()*2)
let computerChoice;
if (randomNumber === 0) {
    computerChoice = "heads";
} else {
    computerChoice = "tails";
}
if (computerChoice === userChoice){
    alert("You won")
} else {
    alert("You lost")
}
// if (y < 0.5)
// y = 0
// else y = 1
// console.log(y)

let birthYear = prompt("What year were you born?");

const age = 2022 - birthYear;
if (age < 21) {
    alert("You are not old enough to drink");
} else {
    alert("You are old enough to drink");

}