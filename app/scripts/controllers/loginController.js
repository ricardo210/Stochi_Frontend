angular.module('AngularScaffold.Controllers')
  .controller('loginController', ['$state','$scope','AuthService', '$rootScope', '$sessionStorage',
   function ($state,$scope, authService, $rootScope, $sessionStorage) {
 
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.boollog = false;

      $scope.viewBackground = "background";

      $scope.login = function(user){
          authService.Login(user).then(function(response){
            $sessionStorage.currentUser = response.data;
            $scope.user = {};
            console.log($sessionStorage.currentUser.nombre);
            console.log($sessionStorage.length);
            if($sessionStorage.currentUser.nombre === ""){
              console.log("empty");
              $scope.boollog = true;
            }
            if($scope.boollog == false){
                $state.go('productos');
            }
        }).catch(function(err){
          alert("Error, ingrese los datos correctos");
          console.log((err.data.error + " " + err.data.message));
        });
      }

  }]);
