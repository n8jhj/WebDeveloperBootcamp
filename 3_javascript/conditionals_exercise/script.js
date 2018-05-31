var age = prompt("What is your age?");

if (age < 0) {
    console.log("Try again once you're out of the womb.");
} else if (age < 18) {
    console.log("You're too young; you may not enter the bar.");
} else if (age < 21) {
    console.log("You may enter, but you may not drink alcohol.");
} else {
    console.log("You may enter with no restrictions.");
}

// Other easter eggs
if (age === "21") {
    console.log("Happy birthday! Please enjoy a free shot.");
}
if (Math.sqrt(age) % 1 === 0) {
    console.log("Perfect square!!");
}
