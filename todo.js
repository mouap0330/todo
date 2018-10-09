//v5
// displayTodo method should show toDoText property
// displayTodo should tell you if todoArrays is empty
// displayTodo should show completed property


var toDoList = {
  todoArray: [],

  displayTodo: function() {
    console.log('My To Do:');

    if (this.todoArray.length === 0) {
        console.log('You have no todoArrays!')
    } else {
        for (var i = 0; i < this.todoArray.length; i++) {
            // checks for completion
            if (this.todoArray[i].completed === true) {
                console.log('( x ) ' + this.todoArray[i].toDoText);
            } else {
                console.log('(   ) ' + this.todoArray[i].toDoText);
            }
        }
    }
  },

  //method should add new objects to the array
  addAToDo: function(newTodoItem) {
    this.todoArray.push({
      toDoText: newTodoItem,
      completed: false
    });
    this.displayTodo();
  },

  //should change the toDoText property of object
  changeAToDo: function(position, newTodoItem) {
    this.todoArray[position].toDoText = newTodoItem;
    this.displayTodo();
  },

  // flip value of 'completed' property
  toggleCompleted: function(position) {
    var todoArrayVar = this.todoArray[position];
    console.log('here' + todoArrayVar);
    todoArrayVar.completed = !todoArrayVar.completed;
    this.displayTodo();
  },

  //should delete the value at position indicated
  deleteAToDo: function(position) {
    this.todoArray.splice(position, 1);
    this.displayTodo();
  }
};

// toDoList.addAToDo('test');
// toDoList.toggleCompleted(0);
// toDoList.addAToDo('first');
// toDoList.changeAToDo(0, 'second');
// toDoList.deleteAToDo(1,1);
