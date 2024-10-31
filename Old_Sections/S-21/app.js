// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// let bird = "Scarlet Macaw";
// function birdWatch() {
//     let bird = "Great Blue Heron";
// }



// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTime(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll)
// }


// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// const square = {
//     area: function (side){
//         return side * side;
//     },
//     perimeter: function (side) {
//         return side * 4;
//     }
// }

// const Mac = {
//     name: "Mactillion",
//     color: "Grey",
//     breed: "Apple",
//     Frrer() {
//         console.log("THIS IS:", this);
//         console.log(`${this.name} says Cannot Compute! Cannot Compute! Cannot Compute!`);
//     }
// }


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time.");
    }
}