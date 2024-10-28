function main() {
    const thumbnailOverlay = document.createElement('div');
    thumbnailOverlay.classList.add('thumbnail-overlay');
    thumbnailOverlay.tabIndex = 0;
    let thumbnailedImage = null;

    const hideThumbnail = () => {
        thumbnailOverlay.classList.remove('active');

        if (thumbnailedImage) {
            thumbnailedImage.focus();
            thumbnailedImage = null;
        }
    };

    thumbnailOverlay.addEventListener('click', event => {
        if (event.target === thumbnailOverlay) {
            hideThumbnail();
        }
    });
    thumbnailOverlay.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            event.preventDefault();
            hideThumbnail();
        }
    });
    document.body.appendChild(thumbnailOverlay);

    for (const thumbnailable of document.getElementsByClassName('thumbnail')) {
        if (thumbnailable.tagName !== 'IMG') {
            continue;
        }

        const showThumbnail = () => {
            const image = document.createElement('img');
            image.src = thumbnailable.src;
            image.alt = thumbnailable.alt;
            // If the image is currently focused, set thumbnailedImage so focus will be restored to it when the overlay
            // is closed
            if (document.activeElement === thumbnailable) {
                thumbnailedImage = thumbnailable;
            }

            thumbnailOverlay.replaceChildren(image);
            thumbnailOverlay.classList.add('active');
            thumbnailOverlay.focus();
        };

        thumbnailable.addEventListener('click', showThumbnail);

        thumbnailable.tabIndex = 0;
        thumbnailable.addEventListener('keydown', event => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                showThumbnail();
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}
