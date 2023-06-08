

//   function initMap() {
//     // Create a new map instance
//     var map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with the desired coordinates
//       zoom: YOUR_ZOOM_LEVEL // Replace with the desired zoom level
//     });

//     // Add a marker to the map
//     var marker = new google.maps.Marker({
//       position: { lat: YOUR_MARKER_LATITUDE, lng: YOUR_MARKER_LONGITUDE }, // Replace with the marker coordinates
//       map: map,
//       title: "Marker Title" // Replace with the desired marker title
//     });
//   }

//   initMap();



//   // Get the logo element
// var logo = document.getElementById('logo');

// // Listen for scroll events
// window.addEventListener('scroll', function() {
//   // Check the scroll position
//   if (window.scrollY > 0) {
//     // Add the 'shrink' class to the logo
//     logo.classList.add('shrink');
//   } else {
//     // Remove the 'shrink' class from the logo
//     logo.classList.remove('shrink');
//   }
// });


// Assuming you have a variable called "isOpen" that determines whether the sign should show "Open" or "Closed"
const isOpen = true; // Change to false for "Closed" sign

if (isOpen) {
  document.getElementById("open").style.display = "block";
  document.getElementById("closed").style.display = "none";
} else {
  document.getElementById("open").style.display = "none";
  document.getElementById("closed").style.display = "block";
}



document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll(".scroll-link");
  
  for (const link of scrollLinks) {
    link.addEventListener("click", smoothScroll);
  }
  
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - 20; // 20px above the target element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
});