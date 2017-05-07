app.controller('RestosCtrl', ['$scope', 'Data', function($scope, Data){
  $scope.restos = Data.all();
}]);