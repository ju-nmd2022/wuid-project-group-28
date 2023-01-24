let image = document.getElementById("backgroundImages");
let images = [
  "coralls.jpg",
  "homebackground.jpg",
  "hotel4.png",
  "yachts.jpg",
  "camelpyramid.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 5);
  backgroundImages.src = images[random];
}, 4000);
