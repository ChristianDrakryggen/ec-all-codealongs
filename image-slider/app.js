const images = [
  {
    filename: "imgone.jpg",
    alt: "img",
  },
  {
    filename: "imgtwo.jpg",
    alt: "img",
  },
  {
    filename: "imgthree.jpg",
    alt: "img",
  },
  {
    filename: "imgfour.jpg",
    alt: "img",
  },
  {
    filename: "imgfive.jpg",
    alt: "img",
  },
  {
    filename: "imgsix.jpg",
    alt: "img",
  },
];

const imageElems = images
  .map(
    (img) =>
      `<img alt="${img.alt}" src="./images/${img.filename}" onclick="openLightBox('${img.filename}')">`
  )
  .join("");

const imageThumbs = images
  .map(
    (img) =>
      `<img alt="${img.alt}" src="./images/${img.filename}" onclick="setMainImage('${img.filename}')" class="thumbnail">`
  )
  .join("");

const openLightBox = (filename) => {
  setMainImage(filename);
  document.querySelector("#lightbox-wrapper").style.display = "flex";
};

const setMainImage = (filename) => {
  document
    .querySelector("#main-image")
    .setAttribute("src", `./images/${filename}`);
  setActiveThumbnail();
};

const setActiveThumbnail = () => {
  const thumbs = document.querySelectorAll(".thumbnail");
  thumbs.forEach((thumb) => {
    if (thumb.src === document.querySelector("#main-image").src) {
      thumb.style.border = "2px solid orange";
    } else {
      thumb.style.border = "0px";
    }
  });
};

const prevImg = () => {
  const thumbs = document.querySelectorAll(".thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.querySelector("#main-image").src &&
      i !== 0
    ) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
      setActiveThumbnail();
    } else if (
      thumbs[i].src === document.querySelector("#main-image").src &&
      i === 0
    ) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[(i += thumbs.length - 1)].src);
      setActiveThumbnail();
    }
  }
};

const nextImg = () => {
  const thumbs = document.querySelectorAll(".thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.querySelector("#main-image").src &&
      i !== thumbs.length - 1
    ) {
      document
        .querySelector("#main-image")
        .setAttribute("src", thumbs[(i += 1)].src);
      setActiveThumbnail();
    } else if (
      thumbs[i].src === document.querySelector("#main-image").src &&
      i === thumbs.length - 1
    ) {
      document.querySelector("#main-image").setAttribute("src", thumbs[0].src);
      setActiveThumbnail();
    }
  }
};

const closeLightBox = () => {
  document.querySelector("#lightbox-wrapper").style.display = "none";
};

window.addEventListener("load", () => {
  document.querySelector("#image-grid").innerHTML = imageElems;
  document.querySelector("#thumbnails-wrapper").innerHTML = imageThumbs;
});
