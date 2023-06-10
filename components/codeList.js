import { createResource, For } from 'solidjs';
import html from 'solidjs-html';
import codeBlock from './codeBlock.js';

/**
 * Renders out a list of the sub-folders of a specific folder on github
 * @param {string} url The url to the folder it should get the sub-folders from and it's names
 * @returns {string} html string
 */
export default function codeList(url) {
    const [code] = createResource(() => getCode(url));

    return html`
        <${For} each=${() => code()}>
            ${(code) => {
                return html`<div>${() => codeBlock(code)}</div>`;
            }}
        <//>
    `;
}

async function getCode(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
