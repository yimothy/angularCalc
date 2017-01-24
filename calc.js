const module = angular.module('calc', [])

.controller('CalcController', function($scope) {
  $scope.test = function(){
    console.log('it worked!');
  }

})
