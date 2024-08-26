const generateForm = document.getElementById("qr_form");
const qrImage = document.getElementById("qr_image");

generateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = document.getElementById("qr_url").value;
  const size = "size=150x150";
  const qrlink = `https://api.qrserver.com/v1/create-qr-code/?${size}&data=`;
  const newImgSrc = qrlink + url;
  qrImage.src = newImgSrc;
  downloadImage(newImgSrc);
  url.value = "";
});

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "qrcode";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
