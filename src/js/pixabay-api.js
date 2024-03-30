import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '43146074-d3428091907388d5fa71ff65d';

export async function fetchImages(searchTerm) {
  const queryParams = new URLSearchParams({
    key: API_KEY,
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await fetch(
      `https://pixabay.com/api/?${queryParams.toString()}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.show({
        backgroundColor: 'rgba(239, 64, 64, 1)',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'rgba(250, 250, 251, 1)',
        position: 'center',
      });
    }
    return data.hits;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
