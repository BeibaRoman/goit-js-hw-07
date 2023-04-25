import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = makeGalleryImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", onGalleryImageClick);

function makeGalleryImgMarkup(el) {
  return el
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

function onGalleryImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${(e.target.src =
      e.target.dataset.source)}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", onCloseByEscape);

  function onCloseByEscape(e) {
    console.log(e.code);
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onCloseByEscape);
    }
  }
}
