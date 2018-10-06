//v4

var toDoList = {
  todo: [],

  displayTodo: function() {
    console.log('My To Do:', this.todo);
  },

  //method should add new objects to the array
  addAToDo: function(newTodoItem) {
    this.todo.push({
      toDoText: newTodoItem,
      completed: false
    });
    this.displayTodo();
  },

  //should change the toDoText property of object
  changeAToDo: function(position, newTodoItem) {
    this.todo[position].toDoText = newTodoItem;
    this.displayTodo();
  },

  // flip value of 'completed' property
  toggleCompleted: function(position) {
    var todoVar = this.todo[position];
    console.log('here' + todoVar);
    todoVar.completed = !todoVar.completed;
    this.displayTodo();
  },

  //should delete the value at position indicated
  deleteAToDo: function(position) {
    this.todo.splice(position, 1);
    this.displayTodo();
  }
};

toDoList.addAToDo('test');
toDoList.toggleCompleted(0);
// toDoList.addAToDo('first');
// toDoList.changeAToDo(0, 'second');
// toDoList.deleteAToDo(1,1);
