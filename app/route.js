 (function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/hotels', {
			templateUrl : 'app/view/hotels.html',
			controller : "hotelsCtrl"
			//template:"<h1>this is about page</h1>"

		}).when('/map', {
			templateUrl : 'map.html',
			controller : "mapCtrl"
			//template:"<h1>this is about page</h1>"

	//	}).when('/map/:name/:age', {
		//	templateUrl : 'app/map.html',
		//	controller : "map"

	//	}).when('/home', {
		//	templateUrl : 'app/views/home.html',
		//	controller : "home"
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/'
		});

	}

})();
