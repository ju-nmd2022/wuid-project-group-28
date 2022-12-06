var image = document.getElementById("cart");

var image2 = document.getElementById("cart1");

btn.addEventListener("click", function () {
  changeImage();
});

function changeImage() {
  image.style.display = "none";
  image2.style.display = "inline-block";
}
