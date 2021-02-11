const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let i = 0;

const changeSlide = () => {
  for (let idx = 0; idx < slides.length; idx++) {
    slides[idx].classList.remove("active");
  }
  slides[i].classList.add("active");
};

const nextEvent = () => {
  if (i == slides.length - 1) {
    i = 0;
  } else {
    i++;
  }
  changeSlide();
};

const prevEvent = () => {
  if (i == 0) {
    i = slides.length - 1;
  } else {
    i--;
  }
  changeSlide();
};

nextBtn.addEventListener("click", nextEvent);
prevBtn.addEventListener("click", prevEvent);
window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    nextEvent();
  }, 7000);
});
