// v10   - there should be a way to create delete button
//       - should be a delete button for each todo
//       - each li should have an id that has the todo position
//       - delete buttos should have access to the todo id
//       - clicking delete should update the todo list and the DOM
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
  displayToDo: function() {
    toDoList.displayTodo();
  },
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

  deleteToDo: function(position) {
    toDoList.deleteAToDo(position);
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
      todosLi.id = i;
      todosLi.textContent = toDoTextWithCompletion;
      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
    }
  },

  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {

      // get element that was clicked
      var elementClicked = event.target;
      //check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
