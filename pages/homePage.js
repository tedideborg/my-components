import { MarkdownBlock, MarkdownSpan, MarkdownElement } from 'md-block';
import html from 'solidjs-html';

/**
 * The homepage that reads the root readme file
 * @returns {string} html string
 */
export default function homePage() {
    return html`
        <div class="container">
            <md-block src="./README.md"></md-block>
        </div>
    `;
}
