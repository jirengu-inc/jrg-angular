var app = angular.module('todo', []);

app.controller('TodoController', function($scope) {
    
  $scope.todo = '';
  
  var data = JSON.parse(localStorage.getItem('todos'));
  $scope.todos = data || [];
  
  $scope.addTodo = function() {
    $scope.todos.push({ text: $scope.todo });
    $scope.todo = '';
    
    var data = JSON.stringify($scope.todos);
    localStorage.setItem('todos', data);

  };
  
  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };
  
  
});