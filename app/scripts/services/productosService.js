angular.module('AngularScaffold.Services').factory('productoService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://angular-scaffold-backend.herokuapp.com/';
		return {
				Getproducto: function(){
					return $http.get(baseUrl + "v1/producto");
				},
				Postproducto: function(payload){
					return $http.post(baseUrl + "v2/producto", payload);
				},
				Deleteproducto: function(nombre){
					return $http.delete(baseUrl + "v4/producto/" + name);
				}
	    };
}]);
