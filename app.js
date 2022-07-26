/*
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young @_@");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink !_!");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise -_-");
} else if (age === 100) {
    console.log("WOW You are wise >_<");
}else if (age > 80) {
    console.log("You can do whatever you want.");
}
*/
document.title = "Hello From JS!"; 

const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);