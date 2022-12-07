let image = document.getElementById("backgroundImages");
let images = [
  "/images/coralls.jpg",
  "homebackground.jpg",
  "/hotels/hotel4.png",
  "/images/yachts.jpg",
  "images/camelpyramid.jpg",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 5);
  backgroundImages.src = images[random];
}, 4000);
