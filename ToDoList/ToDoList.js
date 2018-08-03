var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        printList();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function printList() {
    if (todos == undefined || todos.length == 0) {
        alert("The list is empty");
    } else {
        console.log("**********");
        var uniqueTodo = removeDuplicates(todos);
        uniqueTodo.forEach(function (todo, index) {
            // console.log(index + ": " + todo);
            console.log(index + ": " + todo);
        });
        console.log("**********");
    }
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    todos.forEach(function (duplicate) {
        if (newTodo === duplicate) {
            alert(newTodo + " is a duplicate")
            removeDuplicates(todos);
        } 
    });
    //add to todos array
    todos.push(newTodo);
}


function deleteTodo() {
    if (todos == undefined || todos.length == 0) {
        alert("the list is empty")
    }
    var toDeleteItem = prompt("Enter the name of the item to delete");
    todos.splice(toDeleteItem, 1);
    console.log("Todo Removed")
}

function removeDuplicates(arr) {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

