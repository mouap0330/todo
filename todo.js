// v9   - should be an li element for every todo
//      - each li element should contain .todotext
//      - each li element should show .completed

var toDoList = {
  todoArray: [],

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

  },

  //method should add new objects to the array
  addAToDo: function(newTodoItem) {
    this.todoArray.push({
      toDoText: newTodoItem,
      completed: false
    });

  },

  //should change the toDoText property of object
  changeAToDo: function(position, newTodoItem) {
    this.todoArray[position].toDoText = newTodoItem;
  },

  //should delete the value at position indicated
  deleteAToDo: function(position) {
    this.todoArray.splice(position, 1);
  },
  // flip value of 'completed' property
  toggleCompleted: function(position) {
    var todoArrayVar = this.todoArray[position];
    todoArrayVar.completed = !todoArrayVar.completed;
  },
};

var handlers = {
  // displayToDo: function() {
  //   toDoList.displayTodo();
  // },
  toggleAll: function() {
    toDoList.toggleAll();
    view.displayTodo();
  },
  addToDo: function() {
    var addToDoTextInput = document.getElementById('addToDoTextInput');
    toDoList.addAToDo(addToDoTextInput.value);
    addToDoTextInput.value = '';
    view.displayTodo();
  },

  changeToDo: function() {
    var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
    var changeToDoTextInput = document.getElementById("changeToDoTextInput");
    toDoList.changeAToDo(changeToDoPositionInput.valueAsNumber, changeToDoTextInput.value);
    changeToDoPositionInput.value = '';
    changeToDoTextInput.value = '';
    view.displayTodo();
  },

  deleteToDo: function() {
    var deleteToDoPositionInput = document.getElementById("deleteToDoPositionInput");
    toDoList.deleteAToDo(deleteToDoPositionInput.valueAsNumber);
    deleteToDoPositionInput.value = '';
    view.displayTodo();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    toDoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodo();
  }
};

var view = {
  displayTodo: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < toDoList.todoArray.length; i++) {
      var todosLi = document.createElement('li');
      var todoVar = toDoList.todoArray[i];
      var toDoTextWithCompletion = '';

      if (todoVar.completed === true) {
        toDoTextWithCompletion = '(x) ' + todoVar.toDoText;
      } else {
        toDoTextWithCompletion = '( ) ' + todoVar.toDoText;
      }

      todosLi.textContent = toDoTextWithCompletion;
      todosUl.appendChild(todosLi);
    }
  }
};
