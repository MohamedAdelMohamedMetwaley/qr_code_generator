const generateForm = document.getElementById("qr_form");
const qr_image = document.getElementById("qr_image");

generateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = document.getElementById("qr_url").value;
  const size = "size=150x150";
  const qrlink = `https://api.qrserver.com/v1/create-qr-code/?${size}&data=`;
  qr_image.src = qrlink + url;
  url.value = "";
});
