// const multiply = (x, y) => x * y;

// const square = x => multiply(x, x);

// const isRightTriangle = (a, b, c) => (
//     square(a) + square(b) === square(c)
// )
// console.log("BEFORE!!!")

// isRightTriangle(3, 4, 5);

// console.log("AFTER!!!")




// const multiply = (x, y) => {
//     console.log(`Multiplying ${x} * ${y}`);
//     return x * y;
// };

// const square = x => {
//     console.log(`Squaring ${x}`);
//     return multiply(x, x);
// };

// const isRightTriangle = (a, b, c) => {
//     console.log(`Checking if ${a}, ${b}, ${c} form a right triangle`);
//     return square(a) + square(b) === square(c);
// };

// console.log("BEFORE!!!");
// console.log(isRightTriangle(3, 4, 5)); // Logs intermediate steps
// console.log("AFTER!!!");







// function multiply(a, b) {

// function multiply(a, b) {
//     return (a * b)
// }

// function square(n) {
//     return multiply(n, n)
// }

// function printSquare(n) {
//     let squared = square(n);
//     console.log(squared);
// }




// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//         }, 1000)
//     }, 1000)
// }, 1000)
// brew

// const multiply = (x, y) => x * y;

// const square = (x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c);
// };

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c);
// };

// isRightTriangle(3, 4, 5)



// function multiply(a, b) {
//     return (a * b)
// }

// function square(n) {
//     return multiply(n, n)
// }

// function printSquare(n) {
//     let squared = square(n);
//     console.log(squared);
// }
// undefined
// printSquare(4)
// VM282:11 16
// undefined
// multiply(3, 4)
// 12
// square(5)
// 25


// baz();
// function foo() {
//     throw new Error("Oops!");
// }

// function bar() {
//     foo();
// }

// function baz() {
//     bar();
// }

// baz();

// function foo() {
//     return foo();
// }
// foo();

// let foo = $.getSync("//foo.com");
// let bar = $.getSync("//bar.com");
// let qux = $.getSync("//qux.com");

// console.log(foo);
// console.log(bar);
// console.log(qux);
// DOES NOT WORK!!!





setTimeout(() => {
    document.body.style.backgroundColor = "red";
}, 2000)
setTimeout(() => {
    document.body.style.backgroundColor = "orange";
}, 2000)
