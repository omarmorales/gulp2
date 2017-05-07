app.controller('RestoCtrl', function($scope, $http) {
    $http.get("https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json").then(function(response) {
        $scope.myData = response.data;
    });
});