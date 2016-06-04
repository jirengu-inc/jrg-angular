var app = angular.module('todo', [
  'ngAnimate'
]);

app.controller('TodoController', function($scope) {
    
  $scope.todo = '';
  
  var data = JSON.parse(localStorage.getItem('todos'));
  $scope.todos = data || [];
  
  $scope.todos = $scope.todos.map(function(todo) {
    return {
      text: todo.text,
      done: todo.done || false,
      editing: false
    }
  });
  
  $scope.addTodo = function() {
    
    $scope.todo = $scope.todo.trim();
    if ($scope.todo.length === 0) return;
    
    $scope.todos.push({ 
      text: $scope.todo,
      done: false 
    });
    $scope.todo = '';
    saveTodos();
  };
  
  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
    saveTodos();
  };
  
  $scope.editTodo = function(todo) {
    $scope.todos.forEach((todo) => { todo.editing = false; });
    todo.editing = true;
  };
  
  $scope.updateTodo = function(todo, index) {
    saveTodos();
    todo.editing = false;
  };
  
  $scope.doneTodo = function(todo) {
    saveTodos();
  };
  
  function saveTodos() {
    var todos = $scope.todos.map(function(todo) {
      return { 
        text: todo.text,
        done: todo.done 
      };
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  
});