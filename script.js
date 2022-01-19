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

function debounce(method, delay, arg) {
  clearTimeout(method._tId);
  method._tId= setTimeout(function(){
      method(arg);
  }, delay);
}

function scrollBar(i) {
  const rotareArr = [0, 40, 80, 130];
  const svgNavbar = document.querySelector('.navbar svg');
  svgNavbar.style.transform = `rotate(${rotareArr[i]}deg)`;
}

function scrollSection() {
  const sections = document.querySelectorAll('section');
  for (let i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = sections[i].getBoundingClientRect().top;
    const elementVisible = 180;
    if (elementTop < windowHeight - elementVisible) {
      debounce(scrollBar, 50, i);
      enableMenuBar(i);
    }
  }
}

function enableMenuBar(i) {
  const menuDOM = document.querySelector('.menu');
  Array.from(menuDOM.children).forEach((menuItem, ind) => {
    if (i === ind) {
      menuItem.classList.add('active');
    } else {
      menuItem.classList.remove('active');
    }
  });
}

function clickMenuBarScrollSection() {
  const menuBar = document.querySelector('.menu');
  const sections = document.querySelectorAll('section');
  if (menuBar) {
    Array.from(menuBar.children).forEach((menuItem, ind) => {
      menuItem.addEventListener('click', (event) => {
        event.preventDefault();
        sections[ind].scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const scrollContainerDOM = document.querySelector('.scroll-container');
  if (!scrollContainerDOM) return;
  scrollContainerDOM.addEventListener("scroll", function() {
    reveal();
    scrollSection();
  });
  const galleryTab = [
    document.querySelector('.custom-bar .tab[data-content="#one"]'),
    document.querySelector('.custom-bar .tab[data-content="#two"]'),
    document.querySelector('.custom-bar .tab[data-content="#three"]'),
  ];

  function disableAllGallery() {
    const allGallery = document.querySelectorAll('e-gallery-widget');
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

  clickMenuBarScrollSection();
});