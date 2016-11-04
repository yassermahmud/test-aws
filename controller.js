angular.module('myFirstApp')
.controller('myFirstAppController', function($scope, myFirstAppFactory, myFirstAppService) {
  $scope.myText = 'me'
  $scope.newText = 'New Text';
  $scope.changeText = function() {
    $scope.newText = myFirstAppFactory.changeText($scope.myText);
  };
  $scope.otherText = function () {
    return myFirstAppService.changeText($scope.myText, $scope.newText);
  }
  //$scope.changeText = function() {
    //$scope.newText = 'Hello ' + $scope.myText;
  //};
})
.controller('aboutCtrl', function($scope, $routeParams) {
  $scope.input = $routeParams.id;
})
.controller('contactCtrl', function($scope, $routeParams) {
  $scope.input = $routeParams.id;
});