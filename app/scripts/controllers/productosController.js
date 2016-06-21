angular.module('AngularScaffold.Controllers')
  .controller('productosController', ['productoService', '$scope', '$rootScope', '$sessionStorage',  function (productoService, $scope, $rootScope, $sessionStorage) {
    
    $scope.productoArreglo = [];

    $scope.loadProducto =  function(){
      productoService.Getproducto().then(function(response){
        $scope.productoArreglo = response.data;
      }).catch(function(err){
        alert("No se puede leer los productos1");
      });
    }

    $scope.viewBackground = "background";

    function setHeight() {
      windowHeight = $(window).innerHeight();
      $('#bodyProducto').css('min-height', windowHeight);
    };
    setHeight();  

    $(window).resize(function() {
      setHeight();
    });


    $scope.producto={};
    $scope.name={};
    $scope.description={};
    $scope.ingredient={};
    $scope.addProducto =  function(){
      productoService.Postproducto($scope.producto).then(function(response){
      }).catch(function(err){
        alert("No se puede leer el inventario de productos creados2");
      });
    }

  }]);
