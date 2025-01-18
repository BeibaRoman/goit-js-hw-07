import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onImageGalleryClick);

function onImageGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  	<img class="gallery__image" src="${e.target.dataset.source}" alt="${e.target.alt}" width="800" height="600" />
  `);

  instance.show();

  window.addEventListener("keydown", onCloseByEscape);

  function onCloseByEscape(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onCloseByEscape);
    }
  }
}

function makeMarkupCard({ preview, original, description }) {
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
}

const makeMarkupGallery = galleryItems.map(makeMarkupCard).join("");

galleryContainer.insertAdjacentHTML("afterbegin", makeMarkupGallery);
