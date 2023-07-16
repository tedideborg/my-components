import { For, onMount } from 'solidjs';
import html from 'solidjs-html';

/**
 * The navigation
 * @param {string} currentPage Which page it is to highlight
 * @param {Array} pages An array of strings with the pages it should render
 * @returns {string} html string
 */
export default function navigaiton(currentPage, pages) {
    return html`
        <nav>
            <ul>
                <li>
                    <a
                        class=${currentPage === 'home' ? 'active' : ''}
                        href="#home"
                        data-navigo
                        >Home</a
                    >
                </li>
                <${For} each=${pages}>
                    ${(page) => {
                        return html`
                            <li>
                                <a
                                    class=${currentPage === page
                                        ? 'active'
                                        : ''}
                                    href=${'#' + page}
                                    data-navigo
                                    >${page}</a
                                >
                            </li>
                        `;
                    }}
                <//>
            </ul>
        </nav>
    `;
}
