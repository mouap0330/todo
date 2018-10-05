

var toDoList = {
  todo: ['item 1', 'item 2', 'item 3'],
  // it should have displayTodo method
  displayTodo: function() {
    console.log('My To Do:', this.todo);
  },

  //method should add a new item at end of list
  addAToDo: function(newTodoItem) {
      this.todo.push(newTodoItem);
      this.displayTodo();
  },
  //should edit/replace a value in the list
  changeAToDo: function(position, newValue) {
      // this.todo.splice(position, newValue);
      this.todo[position] = newValue;
      this.displayTodo();
  },
  //should delete the value at position indicated 
  deleteAToDo: function(position) {
      this.todo.splice(position, 1);
      this.displayTodo();
  }
};

toDoList.addAToDo('plnkr');
toDoList.changeAToDo(0, 'first item');
toDoList.deleteAToDo(1,1);
