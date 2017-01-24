const module = angular.module('calc', [])

.controller('CalcController', function($scope) {
  $scope.storage = {};
  $scope.storage.num = '';
  $scope.storage.num1 = '';
  $scope.storage.num2 = '';
  $scope.storage.result;
  $scope.storage.store = [];
  $scope.storage.selectedOp = null;
  $scope.storage.operators = {
    '+': function(a, b) {
      return a + b;
    },
    '-': function(a, b) {
      return a - b;
    },
    "x": function(a, b) {
      return a*b;
    },
    "/": function(a, b) {
      return a / b;
    },
  }

  $scope.store = function(button){
    console.log('button: ', button);
    if(button !== '+' && button !== '-' && button !== 'x' && button !== '/') {
      $scope.storage.num += button;
      // console.log('num: ', $scope.storage.num);
    }
    else if ($scope.storage.store.length === 0 && $scope.storage.num !== ''){
      $scope.storage.num1 = '';
      $scope.storage.store.push($scope.storage.num, button)
      $scope.storage.num = '';
    }
    // $scope.storage.push(button);
    // console.log("storage: ", $scope.storage.store)
  }

  $scope.calc = function() {
    $scope.storage.store.push($scope.storage.num);
    console.log('storage: ', $scope.storage.store);
    $scope.storage.result = $scope.storage.operators[$scope.storage.store[1]](parseInt($scope.storage.store[0]), parseInt($scope.storage.store[2]));
    console.log('result: ', $scope.storage.result);
    $scope.storage.store = [];
    $scope.storage.num = '';
  }

})
