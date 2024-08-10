function main() {
    const thumbnailOverlay = document.createElement('div');
    thumbnailOverlay.classList.add('thumbnail-overlay');
    thumbnailOverlay.tabIndex = 0;

    const hideThumbnail = () => {
        thumbnailOverlay.classList.remove('active');
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
