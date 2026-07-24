(function () {
    const preview = document.querySelector('#resume_content img');
    if (!preview) return; // not the resume page — do nothing

    // Build the overlay once and reuse it.
    const lightbox = document.createElement('div');
    lightbox.className = 'resume_lightbox';
    lightbox.innerHTML = `<img src="${preview.src}" alt="${preview.alt}">`;
    document.body.appendChild(lightbox);

    const open = () => lightbox.classList.add('open');
    const close = () => lightbox.classList.remove('open');

    preview.addEventListener('click', open);
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
})();
