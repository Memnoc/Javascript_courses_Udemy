let todos = ["Buy a dog"];
let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(todos);
    }
    input = prompt("What would you like to do?");
}
console.log("You quit the app");