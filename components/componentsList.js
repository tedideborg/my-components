import { createResource, For, onMount } from 'solidjs';
import html from 'solidjs-html';
import copyButton from './copyButton.js';

/**
 * Renders out a list of the sub-folders of a specific folder on github
 * @param {string} url The url to the folder it should get the sub-folders from and it's names
 * @returns {Promise<string>} html string
 */
export default function componentsList(url) {
    const [components] = createResource(() => getComponents(url));
    onMount(() => {
        setTimeout(() => {
            let codeList = Array.from(document.getElementsByTagName('pre'));
            codeList.forEach((div) => {
                div.setAttribute('data-src', './prismjs/prism.js');
                div.getElementsByTagName('code')[0].setAttribute(
                    'data-prismjs-copy',
                    'copy',
                );
            });
        }, 1000);
    });

    return html`
        <${For} each=${() => components()}>
            ${(file) => {
                return html`
                    <details class="codeBlock">
                        <summary>${file.name.split('.')[0]}</summary>
                        <md-block src=${file.path}></md-block>
                    </details>
                `;
            }}
        <//>
    `;
}

async function getComponents(url) {
    const res = await fetch(url + '/');
    const data = await res.json();
    const files = data.filter((item) => {
        if (item.type === 'file') {
            return item;
        }
    });
    return files;
}
