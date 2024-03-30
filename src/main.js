import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { displayImages, showAlert } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const gallery = document.getElementById('gallery');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
      showAlert('Please enter a search term');
      return;
    }

    try {
      const images = await fetchImages(searchTerm);
      displayImages(images, gallery);
    } catch (error) {
      showAlert('Failed to fetch images');
    }
  });
});

images.forEach(createGalleryItem);
new SimpleLightbox('#gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
