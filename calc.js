const module = angular.module('calc', [])

.controller('CalcController', ($scope) => {
  $scope.test = () => {
    console.log('it worked!');
  }

})
