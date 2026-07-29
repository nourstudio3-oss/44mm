const gallery = document.getElementById("gallery");

const images = JSON.parse(localStorage.getItem("gallery")) || [];

if (images.length === 0) {
  gallery.innerHTML = "<p>لا يوجد صور حاليا</p>";
} else {
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "200px";
    img.style.margin = "10px";

    gallery.appendChild(img);
  });
}