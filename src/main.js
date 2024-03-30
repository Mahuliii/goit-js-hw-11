import { fetchImages } from './js/pixabay-api.js';
import { displayImages, showAlert } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const gallery = document.querySelector('.gallery');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
      showAlert('Please enter a search term');
      return;
    }

    gallery.innerHTML = '';
    const loader = document.createElement('span');
    loader.classList.add('loader');
    loader.style.display = 'block';

    try {
      const images = await fetchImages(searchTerm);
      displayImages(images, gallery);
    } catch (error) {
      showAlert('Failed to fetch images');
    } finally {
      loader.style.display = 'none';
    }
  });
});
