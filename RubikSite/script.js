let images = document.querySelectorAll(".slider-image");
let prevbutton = document.querySelector(".prev");
let nextbutton = document.querySelector(".next");
let img = 0;
function show(n) {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[n].classList.add("active");
  img = n;
}
nextbutton.addEventListener("click", nextImage);
function nextImage() {
    img++;
  if (img >= images.length) {
    img = 0;
  }
  show(img);
}
prevbutton.addEventListener("click", prevImage);
function prevImage() {
    img--;
  if (img < 0) {
    img = images.length - 1;
  }
  show(img);
}
show(img);