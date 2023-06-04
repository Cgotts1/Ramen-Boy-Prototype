

  function initMap() {
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with the desired coordinates
      zoom: YOUR_ZOOM_LEVEL // Replace with the desired zoom level
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: { lat: YOUR_MARKER_LATITUDE, lng: YOUR_MARKER_LONGITUDE }, // Replace with the marker coordinates
      map: map,
      title: "Marker Title" // Replace with the desired marker title
    });
  }

  initMap();