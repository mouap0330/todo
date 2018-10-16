// v11    - todoLost.toggleAll shoudl use forEach
//        - view.displayToDo should use forEach
//        ** Getting rid of all forLoops
var toDoList = {
  todoArray: [],

  // if everything is true, toggleAll will make everything false and vice versa
  toggleAll: function() {

    var completedToDos = 0;
    var totalToDos = this.todoArray.length;

    // get # completed todos
    this.todoArray.forEach(function(todo) {
      if (todo.completed === true) {
        completedToDos++;
      }
    });

    this.todoArray.forEach(function(todo) {
      // case 1: if everything true, make everything false
      if (completedToDos === totalToDos) {
        todo.completed = false;
        // otherwise make everything true
      } else {
        todo.completed = true;
      }
    });
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

      toDoList.todoArray.forEach(function(todo, position) {
        var todosLi = document.createElement('li');
        var todoVar = toDoList.todoArray[i];
        var toDoTextWithCompletion = '';

        if (todoVar.completed === true) {
          toDoTextWithCompletion = '(x) ' + todoVar.toDoText;
        } else {
          toDoTextWithCompletion = '( ) ' + todoVar.toDoText;
        }
        todosLi.id = position;
        todosLi.textContent = toDoTextWithCompletion;
        todosLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todosLi);
      }, this);
    },

    toDoList.todoArray.forEach(function(todo, position) {
      var todosLi = document.createElement('li');
      var toDoTextWithCompletion = '';

      if (todo.completed === true) {
        toDoTextWithCompletion = '(x) ' + todo.toDoText;
      } else {
        toDoTextWithCompletion = '( ) ' + todo.toDoText;
      }
      todosLi.id = position;
      todosLi.textContent = toDoTextWithCompletion;

      // 'this' refers to the view object
      // forEach(callback, thsi) will refer to same 'this'

      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
    }, this);
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
