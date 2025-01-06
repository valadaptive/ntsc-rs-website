function initDownloadButtons() {
    const osMenu = document.getElementById('os-menu');

    function updateButtons() {
        for (const elem of document.getElementsByClassName('os-buttons')) {
            if (elem.classList.contains(osMenu.value)) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        }
    }

    osMenu.addEventListener('change', updateButtons);

    let os = 'windows';
    const ua = navigator.userAgent;
    if (ua) {
        if (ua.includes('Mac')) {
            os = 'macos';
        } else if (ua.includes('Linux')) {
            os = 'linux';
        }
    }
    osMenu.value = os;

    updateButtons();

    for (const downloadButton of document.getElementsByClassName('download-button')) {
        downloadButton.addEventListener('click', () => {
            setTimeout(() => {
                window.location.assign(downloadButton.getAttribute('data-docs-url'));
            }, 1000);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownloadButtons);
} else {
    initDownloadButtons();
}
