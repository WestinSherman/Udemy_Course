// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while(true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase() === "stop copying me") break;
// }   

// "hello"
// "hello"
// "stop copying me!"


// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }








// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = prompt("enter your first guess! (Type 'q' to quite)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }
// if (guess === 'q') {
//     console.log("Ok Quiter...")
// } else {
//     console.log(`YOU GOT IT! It took you ${attempts} guesses`)
// }