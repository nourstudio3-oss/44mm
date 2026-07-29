function saveImages() {
  const input = document.getElementById("upload");
  const files = input.files;

  let images = [];

  if (files.length === 0) {
    alert("اختار صور الأول ❗");
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();

    reader.onload = function (e) {
      images.push(e.target.result);

      if (images.length === files.length) {
        localStorage.setItem("gallery", JSON.stringify(images));
        alert("تم رفع الصور بنجاح ✅");
      }
    };

    reader.readAsDataURL(files[i]);
  }
}