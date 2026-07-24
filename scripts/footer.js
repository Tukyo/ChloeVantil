/* footer.js — one job: render the site-wide footer on every page.
 *
 * Drop <site-footer></site-footer> where the footer goes, load this script,
 * and it fills itself in. Edit the markup here once → every page updates.
 */
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div id="social_media_container" class="container">
                <div id="social_media_docket">
                    <a rel="noopener" target="_blank" aria-label="LinkedIn Social Link"
                        href="https://www.linkedin.com/in/chloe-vantil/"><svg viewBox="0 0 24 24" fill="currentColor"
                            width="40" height="40">
                            <g fill="#2867B2">
                                <path
                                    d="M5.181 4h13.634C19.468 4 20 4.518 20 5.153v13.692c0 .638-.532 1.155-1.184 1.155H5.181C4.53 20 4 19.483 4 18.845V5.153c0-.636.53-1.152 1.181-1.152zm3.754 3.574a1.376 1.376 0 00-2.752 0A1.38 1.38 0 007.56 8.95c.758 0 1.375-.618 1.375-1.376zM8.75 9.998H6.372v7.635H8.75V9.999zm1.485 0h.003v7.633h2.371v-3.777c0-.995.19-1.96 1.425-1.96 1.217 0 1.233 1.14 1.233 2.025v3.714h2.372v-4.188c0-2.056-.444-3.637-2.847-3.637-1.159 0-1.933.633-2.25 1.233h-.031V9.999h-2.273v-.002l-.003.002z">
                                </path>
                            </g>
                        </svg></a>
                </div>
            </div>
            <div id="copyright_container" class="container">
                <div id="copyright_content">Copyright © 2026 Chloe Vantil - All Rights Reserved.</div>
            </div>
            <div id="powered_by_container" class="container row">
                <div id="powered_by_content">Powered by</div>
                <a href="https://github.com/Tukyo" target="_blank" rel="noopener">
                    <div id="powered_by_logo"></div>
                </a>
            </div>
        </footer>`;
    }
}

customElements.define('site-footer', SiteFooter);
