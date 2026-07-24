/* header.js — one job: render the site-wide header on every page.
 *
 * Drop <site-header></site-header> at the top of <body>, load this script,
 * and it fills itself in. Edit the markup here once → every page updates.
 * No duplication across the 7 pages.
 */
class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="header_container" class="container">
            <button class="nav_toggle" type="button" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="index.html">
                <img src="assets/img/Logo.png" alt="Chloe Vantil">
            </a>
        </div>`;

        // Expanded at the top of the page; shrink to compact once scrolled.
        const onScroll = () => {
            this.classList.toggle('scrolled', window.scrollY > 10);
        };
        onScroll(); // set correct state on load (e.g. refreshed mid-page)
        window.addEventListener('scroll', onScroll, { passive: true });
    }
}

customElements.define('site-header', SiteHeader);
