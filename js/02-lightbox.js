import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

function makeMarkupCard({ preview, original, description }) {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}

const makeMarkupGallery = galleryItems.map(makeMarkupCard).join("");

galleryContainer.insertAdjacentHTML("afterbegin", makeMarkupGallery);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
