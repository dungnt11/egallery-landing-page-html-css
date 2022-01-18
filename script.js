function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 180;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const scrollContainerDOM = document.querySelector('.scroll-container');
  if (!scrollContainerDOM) return;
  scrollContainerDOM.addEventListener("scroll", reveal);
  const galleryTab = [
    document.querySelector('.custom-bar .tab[data-content="#one"]'),
    document.querySelector('.custom-bar .tab[data-content="#two"]'),
    document.querySelector('.custom-bar .tab[data-content="#three"]'),
  ];

  function disableAllGallery() {
    const allGallery = document.querySelectorAll('e-gallery-widget');
    console.log(allGallery)
    allGallery.forEach((galleryItem) => {
      galleryItem.style.display = "none";
    });
  }

  function disableAllButton() {
    const allButtons = document.querySelectorAll('.custom-bar tab');
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