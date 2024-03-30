export function displayImages(images, container) {
  container.innerHTML = '';
  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('card-image');
    img.src = image.webformatURL;
    img.alt = image.tags;

    const info = document.createElement('div');
    info.classList.add('card-info');

    const likes = document.createElement('p');
    likes.textContent = `Likes ${image.likes}`;

    const views = document.createElement('p');
    views.textContent = `Views ${image.views}`;

    const comments = document.createElement('p');
    comments.textContent = `Comments ${image.comments}`;

    const downloads = document.createElement('p');
    downloads.textContent = `Downloads ${image.downloads}`;

    info.appendChild(likes);
    info.appendChild(views);
    info.appendChild(comments);
    info.appendChild(downloads);

    card.appendChild(img);
    card.appendChild(info);

    container.appendChild(card);
  });
}

export function showAlert(message) {
  alert(message);
}
