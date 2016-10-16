function ReferalCtrl($scope, $compile, $http, $timeout) {
	var records;
	var prev_infoWindow;
	var globalMarkers = [];
	$scope.referalfilters = {};
	$scope.refmap = new google.maps.Map(document.getElementById('addrefmap'), {
	  center : {
			lat : 21.482353,
			lng : -157.855729
		},
		zoom : 10,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#1e7185"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"44"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"-89"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#95ff00"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#9cd7da"}]}]
	});
	if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			$scope.refmainmap = new google.maps.Map(document.getElementById('referralmap'), {
				  center : pos,
					zoom : 13,
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#1e7185"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"44"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"-89"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#95ff00"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#9cd7da"}]}]
			});
          }, function() {
			  var posit = {
              lat: 21.312070,
              lng: -157.856934
			};
			  $scope.refmainmap = new google.maps.Map(document.getElementById('referralmap'), {
				  center : posit,
					zoom : 13,
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#1e7185"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"44"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"-89"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#95ff00"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#9cd7da"}]}]
			});
          });
        } else {
			var poserr = {
              lat: 21.312070,
              lng: -157.856934
			};
			$scope.refmainmap = new google.maps.Map(document.getElementById('referralmap'), {
				  center : poserr,
					zoom : 13,
					mapTypeId : google.maps.MapTypeId.ROADMAP,
					styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#1e7185"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"lightness":"44"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"color":"#ff0000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"-89"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#95ff00"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#9cd7da"}]}]
			});
	}
	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
						  'Error: The Geolocation service failed.' :
						  'Error: Your browser doesn\'t support geolocation.');
	}
	getrefdata().then(function(data) {
		records = data.data.markers;
		var iconDir = "img/map/";
		var icons = {
		  '': {
			icon: iconDir + 'active-group.png'
		  },
		  'M': {
			icon: iconDir + 'active-individual.png'
		  },
		  'F': {
			icon: iconDir + 'active-individual.png'
		  },
		};
		for (var i = 0; i < records.length; i++) {
		var record = records[i];
		var markerimg = {
			url: icons[record.gender].icon,
			scaledSize: new google.maps.Size(44,66), // scaled size
			origin: new google.maps.Point(0,0), // origin
			anchor: new google.maps.Point(22,66) // anchor
		};

		var markerPos = new google.maps.LatLng(record.lat, record.lng);
		// Add the markerto the map
		marker = new google.maps.Marker({
			category: record.refstatus,
			map: $scope.refmainmap,
			icon: markerimg,
			animation: google.maps.Animation.DROP,
			position: markerPos
		});
		globalMarkers.push(marker);
		addInfoWindow(marker, record, i);
		}
	});
	function addInfoWindow(marker, record, i) {
	      //var contentString = "<button ng-click='toggleList()' ng-class='listButton' class='r-listview'>VIEW LIST <i class='ion-ios-list-outline'></i></button>"

		  var contentString = "<span ng-click='toggleDetails("+i+"); gotoLocation("+record.lat+","+record.lng+")'><a ng-click='toggleDetails("+i+"); gotoLocation("+record.lat+","+record.lng+")' class='infowindow-name'>"+record.name+"</a><div class='infowindow-img'><img class='infowindow-imglink' src='"+record.imgurl+"'></div><div class='infowindow'></span><p><span class='info-subheader'>Date referred</span> "+record.referdate+"</p><p><span class='info-subheader'>gender</span>: "+record.gender+"</p></div>";


		  var compileContent = $compile(contentString)($scope)
		  var infoWindow = new google.maps.InfoWindow({
			  content: compileContent[0]
		  });
		  google.maps.event.addListener(marker, 'click', function() {
			  if(prev_infoWindow){
				  prev_infoWindow.close();
			  }
			  prev_infoWindow = infoWindow;
			  infoWindow.open($scope.map, marker);
		  });

	}
	// Create the search box and link it to the UI element.
	var input = document.getElementById('searchinput');
	console.log(input);
	var searchBox = new google.maps.places.SearchBox(input);
	$scope.refmap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Bias the SearchBox results towards current map's viewport.
	$scope.refmap.addListener('bounds_changed', function() {
	  searchBox.setBounds($scope.refmap.getBounds());
	});

	var markers = [];
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function() {
	  var places = searchBox.getPlaces();

	  if (places.length == 0) {
		return;
	  }

	  // Clear out the old markers.
	  markers.forEach(function(marker) {
		marker.setMap(null);
	  });
	  markers = [];

	  // For each place, get the icon, name and location.
	  var bounds = new google.maps.LatLngBounds();
	  places.forEach(function(place) {
		if (!place.geometry) {
		  console.log("Returned place contains no geometry");
		  return;
		}
		var icon = {
		  url: place.icon,
		  size: new google.maps.Size(71, 71),
		  origin: new google.maps.Point(0, 0),
		  anchor: new google.maps.Point(17, 34),
		  scaledSize: new google.maps.Size(25, 25)
		};

		// Create a marker for each place.
		markers.push(new google.maps.Marker({
		  map: $scope.refmap,
		  icon: icon,
		  title: place.name,
		  position: place.geometry.location
		}));

		if (place.geometry.viewport) {
		  // Only geocodes have viewport.
		  bounds.union(place.geometry.viewport);
		} else {
		  bounds.extend(place.geometry.location);
		}
	  });
	  $scope.refmap.fitBounds(bounds);
	});
	$scope.delPopup = function(e){
		$scope.confirmDel = $scope.refpgLists[e];
	};
	$scope.AssignResp = function(e){
		$scope.confirmResp = $scope.refpgLists[e];
	};
	$scope.AssignRespID = function(e){
		$scope.respID = e;
	};
	$scope.ConfirmAssign = function(){
		console.log($scope.respID);
		console.log($scope.confirmResp.id);
		var method = 'POST';
		var url = 'http://test.ohai-app.com/AssignResp.php';
		var responder = $scope.respID;
		var id = $scope.confirmResp.id;
		var data = {
			responder: responder,
			idnum: id

		};
		$http({
		  method: method,
		  url: url,
		  data: data,
		  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		}).
		success(function(response) {
			getrefdata().then(function(data) {
				console.log(data);
			});
		}).
		error(function(response) {
			console.log("failed");
		});
	}
	$scope.filterMarkers = function (e) {
		   var refstatus = e;
		   for (i = 0; i < globalMarkers.length; i++) {
			   if(refstatus == ""){
				   marker = globalMarkers[i];
				   marker.setVisible(true);
			   }else{
					marker = globalMarkers[i];
					// If is same category or category not picked
					if (marker.category == 0) {
						marker.setVisible(true);
					}
					// Categories don't match
					else {
						marker.setVisible(false);
					}
			   }
        }
    }
	$scope.addNewReferal = function(){
		console.log($scope.newReferal);
		$scope.newReferal={};
	}
	$scope.createrefMap = function() {
		var currentCenter = $scope.refmap.getCenter();
		$timeout(function() {
			google.maps.event.trigger($scope.refmap, 'resize');
		}, 500);
		$scope.refmap.setCenter(currentCenter);
	}
	$scope.removeMarker = function(e){
		var method = 'POST';
		var url = 'http://test.ohai-app.com/removeMarker.php';
		var id = e;
		var data = {
			idnum: id
		};
		$http({
		  method: method,
		  url: url,
		  data: data,
		  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
		}).
		success(function(response) {
			console.log("called");
			getrefdata().then(function(data) {
				console.log(data);
			});
		}).
		error(function(response) {
			console.log("failed");
		});
	};
	function getrefdata() {
		return $http.get("http://test.ohai-app.com/responderMarker.php")
			.success(function (response) {
				$scope.refpgLists = response.markers;
				$scope.respgLists = response.responders;
			});
	}
}
angular.module("OHAI").controller("ReferalCtrl", ["$scope", "$compile", "$http", "$timeout", ReferalCtrl]);
