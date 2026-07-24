function hydrateEmbeds() {
    document.querySelectorAll('.embed[data-yt]').forEach((el) => {
        const id = el.dataset.yt.trim();
        if (!id) return; // empty slot — leave the placeholder
        if (el.querySelector('iframe')) return; // already built — never double-inject

        const frame = document.createElement('iframe');
        frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
        frame.title = el.dataset.title || 'YouTube video';
        frame.loading = 'lazy';
        frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        el.appendChild(frame);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateEmbeds);
} else {
    hydrateEmbeds();
}
