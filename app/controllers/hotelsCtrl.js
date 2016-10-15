 (function(){
			var app= angular.module('app');
app.controller('hotelsCtrl', function($scope, $http) {
	$http.get('http://127.0.0.1:8020/myWebProject/data/hotelsData.json')
	.success(function(response){
		$scope.hotels = response.hotelsData;
		
	});

   

});
		

})();






