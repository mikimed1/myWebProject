//(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/hotels', {
			templateUrl : 'app/views/hotels.html',
			//template:"<h1>this is about page</h1>"

		}).when('/contactus', {
			templateUrl : 'app/views/contactus.html',
			controller : "contactUs"
			//template:"<h1>this is about page</h1>"

		}).when('/map/:name/:age', {
			templateUrl : 'app/map.html',
			controller : "map"

		}).when('/home', {
			templateUrl : 'app/views/home.html',
			controller : "home"
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/'
		});

	}

//})();
