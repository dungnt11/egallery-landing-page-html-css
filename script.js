function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener("scroll", reveal);
  const galleryTab = [
    document.querySelector('.gallery-tab button[data-content="#one"]'),
    document.querySelector('.gallery-tab button[data-content="#two"]'),
    document.querySelector('.gallery-tab button[data-content="#three"]'),
  ];

  function disableAllGallery() {
    const allGallery = document.querySelectorAll('e-gallery-widget');
    allGallery.forEach((galleryItem) => {
      galleryItem.style.display = "none";
    });
  }

  function disableAllButton() {
    const allButtons = document.querySelectorAll('.gallery-tab button');
    allButtons.forEach((galleryItem) => {
      galleryItem.classList.remove('active');
    });
  }

  // Enable first gallery
  disableAllGallery();
  const firstGallery = document.querySelector('e-gallery-widget[data-ind="1"]');
  if (firstGallery) {
    firstGallery.style.display = 'inline-block';
  }

  galleryTab.forEach((tabItem, ind) => {
    tabItem.addEventListener('click', function(event) {
      disableAllGallery();
      disableAllButton();
      event.target.classList.add('active');
      const galleryEnable = document.querySelector(`e-gallery-widget[data-ind="${ind + 1}"]`);
      if (galleryEnable) {
        galleryEnable.style.display = 'inline-block';
      }
    })
  });
});