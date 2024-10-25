let input = prompt("What would you like to do?")
const todos = ["Become Omnipotent Through Tech.", "Build Robot Army."]
while (input !== "quit" && input !== ("q")) {
    if (input === "list") {
        console.log("************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("************")
    } else if (input === "new") {
        const newTodo = prompt("Ok, what do you want to add?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    input = prompt("What would you like to do?")
}
console.log("Quiting App.")