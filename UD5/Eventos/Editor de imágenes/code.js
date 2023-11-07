"use strict";

/////////////////////
// FUNCTIONS
/////////////////////


const original = () => {
  ctx.drawImage(img, 0, 0);
};

const grayscale = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
};

/////////////////////
// MAIN
/////////////////////

//1.- Variable donde vamos a guardar el contenido del fichero JSON
let contenido;
const img = new Image();
img.crossOrigin = "anonymous";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//2.- Recuperamos las etiquetas para leer el fichero
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

//3.- Leemos el fichero
fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    let url = window.URL.createObjectURL(file);
    // Cuando se haya seleccionado
    img.src=url;
  }
});

// Add eventListener para la imagen y los botones de abajo
img.addEventListener('load', () => {
  ctx.drawImage(img, 0, 0);
});

const inputs = document.querySelectorAll("[name=color]");
for (const input of inputs) {
  input.addEventListener("change", (evt) => {
    if (evt.target.value === "grayscale")
      return grayscale();
    else
      return original();
  });
}