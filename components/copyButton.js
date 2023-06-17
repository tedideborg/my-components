import { createResource, createSignal, Show, createEffect } from 'solidjs';
import html from 'solidjs-html';

/**
 * Renders a block of code
 * @param {function} code
 * @returns {string} html string
 */
export default function copyButton(code) {
    function copyToClipboard() {
        const codeString = code();
        navigator.clipboard.writeText(codeString);
    }

    return html`
        <button class="copyBtn" onclick=${copyToClipboard}>Copy code</button>
    `;
}
