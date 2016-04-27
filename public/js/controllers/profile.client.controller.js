app.controller('ProfileController', ['$rootScope','$scope','$http','$location','$window','$localStorage','$routeParams','User', function($rootScope,$scope,$http,$location,$window,$localStorage,$routeParams,User) {

  User.getEachUserDetails($routeParams.username, function(success, data){
    if(success){
      $scope.userDetails = data.user;
    }
  });
}]);


