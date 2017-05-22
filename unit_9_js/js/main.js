
function initMap() {
	var coffeeJerry = {lat: 40.8054491, lng: -73.9654415};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: coffeeJerry
	});
	var marker = new google.maps.Marker({
		 position: coffeeJerry,
		 map: map
	});
}
		    