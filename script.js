var accordion = document.getElementsByClassName("tf-c-accordion-header");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    this.getElementsByClassName("tf-c-accordion-icon")[0].classList.toggle("icon-16-plus-mono");
    this.getElementsByClassName("tf-c-accordion-icon")[0].classList.toggle("icon-16-minus-mono");
  });
} 
