var todo = ['pack', 'brush teeth', 'sleep'];

//should display the list
function displayTodo() {
    console.log(todo);
};

//should add a new item to the end of the list
function addNewTodo(newTodo) {
    todo.push(newTodo);
};

//should delete the element of specified index in list
function deleteTodo(index) {
    todo.splice(index,1);
};

//should change the element of the specified index in list
function editTodo(index, task) {
    todo[index] = task;
};

addNewTodo('brush');
deleteTodo(2);
editTodo(2, 'eat');
displayTodo();
