document.addEventListener('DOMContentLoaded', function() {
    const thumbnailOverlay = document.createElement('div');
    thumbnailOverlay.classList.add('thumbnail-overlay');
    thumbnailOverlay.addEventListener('click', event => {
        if (event.target === thumbnailOverlay) {
            thumbnailOverlay.classList.remove('active');
        }
    });
    document.body.appendChild(thumbnailOverlay);

    for (const thumbnailable of document.getElementsByClassName('thumbnail')) {
        if (thumbnailable.tagName !== 'IMG') {
            continue;
        }

        thumbnailable.addEventListener('click', function() {
            const image = document.createElement('img');
            image.src = thumbnailable.src;
            image.alt = thumbnailable.alt;

            thumbnailOverlay.replaceChildren(image);
            thumbnailOverlay.classList.add('active');
        });
    }
});
