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