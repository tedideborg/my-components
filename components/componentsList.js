import { For, Suspense, createResource, onMount } from 'solidjs';
import html from 'solidjs-html';
import { getDataFromGithub } from '../app.js';

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
        ${() =>
            components.error &&
            html`<div class="alert-danger" role="alert">
                Too many fetch requests to github. Come back in an hour
            </div>`}
        <${Suspense} fallback=${html`<section aria-busy="true"></section>`}>
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
        <//>
    `;
}

async function getComponents(url) {
    return getDataFromGithub(url, 'files');
}
