// Model Section

/* If localStorage has a todos array, then use it
    Ottherwise use the default array. */
let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// Check if it's an array
if (Array.isArray(savedTodos)) {
    todos = savedTodos;
} else {
    todos = [{
    title: 'Get groceries',
    dueDate: '2023-07-01',
    id: 'id1'
}, {
    title: 'Wash car',
    dueDate: '2023-07-01',
    id: 'id2'
},  {
    title: 'Make dinner',
    dueDate: '2023-07-01',
    id: 'id3'
}];
}

//Creates a todo
const createTodo = (title, dueDate) => {
    const id = '' + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

    saveTodos();
}

//Deletes a todo
const removeTodo = idToDelete => {
    todos = todos.filter(function (todo) {
        // If the id of this todo matches idToDelete, return false
        // For everything else, return true
        if (todo.id === idToDelete) {
            return false;
        } else {
            return true;
        }
    });
    saveTodos();
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}
