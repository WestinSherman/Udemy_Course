// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// let bird = "Scarlet Macaw";
// function birdWatch() {
//     let bird = "Great Blue Heron";
// }



function callTwice(func) {
    func();
    func();
}

function callTenTime(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}