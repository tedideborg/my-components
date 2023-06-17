import { createResource, For } from 'solidjs';
import html from 'solidjs-html';
import codeList from './codeList.js';

/**
 * Renders out a list of the sub-folders of a specific folder on github
 * @param {string} url The url to the folder it should get the sub-folders from and it's names
 * @returns {Promise<string>} html string
 */
export default function componentsList(url) {
    const [components] = createResource(() => getComponents(url));

    return html`
        <${For} each=${() => components()}>
            ${(dir) => {
                return html`
                    <article>
                        <h4>${dir.name}</h4>
                        ${codeList(`${url}/${dir.name}/`)}
                    </article>
                `;
            }}
        <//>
    `;
}

async function getComponents(url) {
    const res = await fetch(url + '/');
    const data = await res.json();
    const dirs = data.filter((item) => {
        if (item.type === 'dir') {
            return item;
        }
    });
    return dirs;
}
