/*(function(){
	
	
	angular.module('app', [])
.controller('MapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});
		

})();*/

(function(){
	angular.module('app').controller('mapCtrl', function($http,$scope) {
		
		$http.get('http://127.0.0.1:8020/myProject/data/hotelsData.json')
	.success(function(response){
		$scope.hotels = response.hotelsData;
		var marker = new google.maps.Marker({
                position: map.getCenter(),
                map: map,                          
                icon: 'http://ruralshores.com/assets/marker-icon.png',
                optimized:false
             });
		
		var vm = this;
  		vm.positions = [];
  		for(var hotel in $scope.hotels)	
  		
  			{
  				console.log($scope.hotels[hotel]);
  				var arr = [parseFloat($scope.hotels[hotel].Latitude),parseFloat($scope.hotels[hotel].Longitude)];
				console.log(arr);
  				var obs = { pos: arr };
  				
  			vm.positions.push(obs);
  			}
  			console.log(JSON.stringify(vm.positions));
  // var vm = this;
  // vm.positions =[
    // {pos:[40.71, -74.21]},
    // {pos:[41.72, -73.20]},
    // {pos:[42.73, -72.19]},
    // {pos:[43.74, -71.18]},
    // {pos:[44.75, -70.17]},
    // {pos:[45.76, -69.16]},
    // {pos:[46.77, -68.15]}
  // ];
  
  vm.addMarker = function(event) {
    var ll = event.latLng;
    vm.positions.push({pos:[ll.lat(), ll.lng()]});
  };
});
})
})();
    	// <script src="//googleapis.com/maps/api/js?sensor=false"></script>
    //	pt src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa4clAWvykQs5Yx2QFmX7achWBJWnp2DA&callback=initMap"async defer></script>
    	