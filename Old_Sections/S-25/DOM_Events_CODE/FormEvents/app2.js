// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#catName");
// const list = document.querySelector("#cats");
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const catName = input.value;
//     const newLI = document.createElement("LI");
//     newLI.innerText = catName;
//     list.append(newLI);
//     input.value = "";
// });

const h1 = document.querySelector("h1");
const input = document.querySelector("#username");
form.addEventListener("input", function (e) {
    h1.innerText = input.value;
});