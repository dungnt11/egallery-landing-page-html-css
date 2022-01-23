function mobileAndTabletCheck() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 70;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function debounce(method, delay, arg) {
  clearTimeout(method._tId);
  method._tId = setTimeout(function () {
    method(arg);
  }, delay);
}

function scrollBar(i) {
  const rotareArr = [0, 40, 80, 130];
  const svgNavbar = document.querySelector(".navbar svg");
  svgNavbar.style.transform = `rotate(${rotareArr[i]}deg)`;
}

function scrollSection() {
  const sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = sections[i].getBoundingClientRect().top;
    const elementVisible = 180;
    if (elementTop < windowHeight - elementVisible) {
      debounce(scrollBar, 0, i);
      enableMenuBar(i);
    }
  }
}

function enableMenuBar(i) {
  const menuDOM = document.querySelector(".menu");
  Array.from(menuDOM.children).forEach((menuItem, ind) => {
    if (i === ind) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });
}

function clickMenuBarScrollSection() {
  const tabBar = document.querySelector(".menu");
  const sections = document.querySelectorAll("section");
  if (tabBar) {
    Array.from(tabBar.children).forEach((menuItem, ind) => {
      menuItem.addEventListener("click", (event) => {
        event.preventDefault();
        sections[ind].scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const scrollContainerDOM = document.querySelector(".scroll-container");
  if (!scrollContainerDOM) return;

  if (mobileAndTabletCheck()) {
    // Nếu là mobile | table thì hiện section 2
    const section02 = document.querySelector(".section-2");
    if (section02) {
      section02.querySelector(".section-heading").classList.add("active");
      section02.querySelector(".tabs").classList.add("active");
      section02.querySelector("e-gallery-widget").classList.add("active");
    }
  }

  scrollContainerDOM.addEventListener("scroll", function () {
    reveal();
    scrollSection();
  });
  const galleryTab = [
    document.querySelector(".tabs li:nth-child(1)"),
    document.querySelector(".tabs li:nth-child(2)"),
    document.querySelector(".tabs li:nth-child(3)"),
  ];

  function disableAllGallery() {
    const allGallery = document.querySelectorAll("e-gallery-widget");
    allGallery.forEach((galleryItem) => {
      galleryItem.style.display = "none";
    });
  }

  function disableAllButton() {
    const allButtons = document.querySelectorAll(".tabs li");
    allButtons.forEach((galleryItem) => {
      galleryItem.classList.remove("active");
    });
  }

  // Enable first gallery
  disableAllGallery();
  const firstGallery = document.querySelector('e-gallery-widget[data-ind="1"]');
  if (firstGallery) {
    firstGallery.style.display = "inline-block";
  }

  galleryTab.forEach((tabItem, ind) => {
    tabItem.addEventListener("click", function (event) {
      disableAllGallery();
      disableAllButton();
      event.target.classList.add("active");
      const galleryEnable = document.querySelector(
        `e-gallery-widget[data-ind="${ind + 1}"]`
      );
      if (galleryEnable) {
        galleryEnable.style.display = "inline-block";
      }
    });
  });

  clickMenuBarScrollSection();
});
