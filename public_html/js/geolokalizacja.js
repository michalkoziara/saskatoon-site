var origin,
    destination = "Polubicze Wiejskie Drugie 18",
    service = new google.maps.DistanceMatrixService();
getLocation();


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolokalizacja nie jest wspierana w tej przeglądarce.");
    }
}
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    origin = new google.maps.LatLng(lat, lng);

    service.getDistanceMatrix(
        {
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            avoidHighways: false,
            avoidTolls: false
        },
        callback
    );
}


function callback(response, status) {
    var tekst = document.getElementById("geo");

    if(status=="OK") {
        tekst.innerHTML = "Twoje aktualne miejsce <br>" + response.originAddresses[0] + "<br> znajduje się zaledwie "+response.rows[0].elements[0].distance.text+" od Nas!";
    } else {
        alert("Error: " + status);
    }
}