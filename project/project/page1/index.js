slidesLenght = 5;

window.onload = function () {
  if (document.body.offsetWidth < 1430) replaceCustomChildren();
  if (document.body.offsetWidth < 570) replaceDaysChildren();

  nextSlide();
  prevSlide();

  var mobileSlides = document.getElementById("reviewSlider");

  var swipeleft = Hammer(mobileSlides).on("swipeleft", function (event) {
    nextSlideSwipe();
  });

  var swiperight = Hammer(mobileSlides).on("swiperight", function (event) {
    prevSlideSwipe();
  });
};

function replaceCustomChildren() {
  const customRow = document.querySelector(".custom__row");
  const slider = document.getElementById("custom-slider");
  const textWrapper = document.getElementById("info-text");
  const infoBlock = document.querySelector(".custom__info");
  const options = document.getElementById("custom-options");
  infoBlock.removeChild(options);
  infoBlock.removeChild(textWrapper);
  customRow.removeChild(slider);
  customRow.append(textWrapper);
  customRow.append(slider);
  customRow.append(options);
}

let index = 1;

function replaceDaysChildren() {
  const daysTop = document.querySelector(".days__way-top");
  const secondItem = document.getElementById("daysSecondItem");
  const daysBottom = document.querySelector(".days__way-bottom");
  daysTop.removeChild(secondItem);
  daysBottom.append(secondItem);
}

function nextSlide() {
  let nextSlideBtn = document.getElementById("nextSlideReview");
  let slides = document.querySelectorAll(".review__item");

  nextSlideBtn.addEventListener("click", () => {
    if (index === 3) return;
    slides.forEach((el) => {
      el.style.left = "-" + index * (el.offsetWidth + 28) + "px";
    });

    index++;
  });
}

function prevSlide() {
  let prevBtn = document.getElementById("prevSlideReview");
  let slides = document.querySelectorAll(".review__item");

  prevBtn.addEventListener("click", () => {
    if (index === 1) return;
    slides.forEach((el) => {
      left = parseInt(el.style.left);
      el.style.left = left - (el.offsetWidth + 28) * -1 + "px";
    });

    index--;
  });
}

function prevSlideSwipe() {
  let slides = document.querySelectorAll(".review__item");
  if (index === 1) return;
  slides.forEach((el) => {
    left = parseInt(el.style.left);
    el.style.left = left - (el.offsetWidth + 28) * -1 + "px";
  });

  index--;
}

function nextSlideSwipe() {
  let slides = document.querySelectorAll(".review__item");

  if (index === 3) return;
  slides.forEach((el) => {
    el.style.left = "-" + index * (el.offsetWidth + 28) + "px";
  });

  index++;
}
