document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalClose = document.querySelector(".close");
  const modalTriggers = document.querySelectorAll(".modal-trigger");

  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
      modal.style.display = "block";
      modalImage.src = this.src;
    });
  });

  modalClose.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});





// document.addEventListener('DOMContentLoaded', function() {
//   var scrollLinks = document.querySelectorAll('.scroll-link');
  
//   for (var i = 0; i < scrollLinks.length; i++) {
//     scrollLinks[i].addEventListener('click', scrollToTarget);
//   }
  
//   function scrollToTarget(event) {
//     event.preventDefault();
    
//     var targetId = this.getAttribute('href');
//     var targetElement = document.querySelector(targetId);
    
//     if (targetElement) {
//       var offset = 160; // Offset in pixels
      
//       var targetOffset = targetElement.offsetTop - offset;
//       window.scrollTo({
//         top: targetOffset,
//         behavior: 'smooth'
//       });
//     }
//   }
// });








document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', scrollToTarget);
  }
  
  function scrollToTarget(event) {
    event.preventDefault();
    
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      var offset = 160; // Offset in pixels
      
      var targetOffset = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var fadeElements = document.querySelectorAll('.fade-in-element-scroll');
  
  function checkFadeElements() {
    for (var i = 0; i < fadeElements.length; i++) {
      var fadeElement = fadeElements[i];
      var elementOffset = fadeElement.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      
      if (elementOffset < windowHeight * 0.8) {
        fadeElement.classList.add('is-visible');
      }
    }
  }
  
  window.addEventListener('scroll', checkFadeElements);
  checkFadeElements();
});