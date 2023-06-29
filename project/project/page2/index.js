window.onload = function () {
  toggleMenu();

  let slidesInView = 5;

  let centredSlidesForMobile = false;

  if (document.body.offsetWidth < 909) slidesInView = 3;

  if (document.body.offsetWidth < 493) {
    centredSlidesForMobile = true;
    slidesInView = 1.6;
  }

  let japandiSwiper = new Swiper(".japandiSwiper", {
    slidesPerView: slidesInView,
    loop: true,
    navigation: {
      nextEl: ".japandi__right-btn",
      prevEl: ".japandi__left-btn",
    },
    centeredSlides: centredSlidesForMobile,
  });

  let miniSwiper = new Swiper(".miniSwiper", {
    slidesPerView: slidesInView,
    loop: true,
    navigation: {
      nextEl: ".mini__right-btn",
      prevEl: ".mini__left-btn",
    },
    centeredSlides: centredSlidesForMobile,
  });

  let contempSwiper = new Swiper(".contempSwiper", {
    slidesPerView: slidesInView,
    loop: true,
    navigation: {
      nextEl: ".contemp__right-btn",
      prevEl: ".contemp__left-btn",
    },
    centeredSlides: centredSlidesForMobile,
  });
};

function toggleMenu() {
  isMenuOpen = false;

  const openMenuBtn = document.querySelector(".menu__btn");
  const menu = document.querySelector(".menu__ul");

  openMenuBtn.addEventListener("click", () => {
    if (!isMenuOpen) {
      menu.style.maxHeight = "500px";

      openMenuBtn.style.transform = "rotate(180deg)";
    } else {
      menu.style.maxHeight = "23px";
      openMenuBtn.style.transform = "none";
    }

    isMenuOpen = !isMenuOpen;
  });
}
