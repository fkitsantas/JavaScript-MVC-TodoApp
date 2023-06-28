//Controller Section

const addTodo = () =>{
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    // Check if either title or dueDate is empty. If so, return without adding a todo.
    if (title.trim() === '' || dueDate.trim() === '') {
        alert('Both fields are required!');
        return;
}

    createTodo(title, dueDate);
    render();

    // Clear the inputs after adding a todo.
    textbox.value = '';
    datePicker.value = '';
}

const deleteTodo = event => {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    removeTodo(idToDelete);
    render();
}