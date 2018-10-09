// v6 - toggles all true if everything is false,
//      otherwise make everything true

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

  // if everything is true, toggleAll will make everything false and vice versa
  toggleAll: function() {

    var completedToDos = 0;
    var totalToDos = this.todoArray.length;
    for (var i = 0; i < totalToDos; i++) {
      if (this.todoArray[i].completed === true) {
        completedToDos++;
      }
    }

    if (completedToDos === totalToDos) {
      for (var j = 0; j < totalToDos; j++) {
        this.todoArray[j].completed = false;
      }
    } else {
      for (var k = 0; k < totalToDos; k++) {
        this.todoArray[k].completed = true;
      }
    }
    this.displayTodo();
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
