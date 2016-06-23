var app = angular.module('Stochi', ['ui.router', 'ngStorage', 'Stochi.Services', 'Stochi.Controllers']);

angular.module('Stochi.Controllers', []);
angular.module('Stochi.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('index');
	$stateProvider
	.state('index', {
		url: '/index',
		templateUrl: '/views/index.html',
		controller: 'loginController'
	})
	.state('productos', {
		url: '/productos',
		templateUrl: '/views/producto.html',
		controller: 'productosController',
		name: "productos",
		data: {
			pageTitle: 'LogIn'
		}
	})
}]);
