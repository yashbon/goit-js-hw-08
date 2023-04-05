// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(
    ({ description, preview, original }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
).join('');
galleryList.insertAdjacentHTML('afterbegin', markup);

let lightbox = new SimpleLightbox('.gallery__item .gallery__link', {
    /* options */
    captionsData: 'alt',
    captionDelay: 250,
});
