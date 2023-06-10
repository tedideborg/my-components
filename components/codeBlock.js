import { createResource, createSignal, Show, createEffect } from 'solidjs';
import html from 'solidjs-html';
import CopyButton from './copyButton.js';

const types = {
    js: 'Javascript',
    html: 'Html',
    css: 'Css',
};

/**
 * Renders a block of code
 * @param {object} data
 * @returns {Promise<string>} html string
 */
export default function codeBlock({ path }) {
    const [url, setUrl] = createSignal('');
    const [type, setType] = createSignal(() => getType(path));
    const [code] = createResource(url, fetchCode);

    const parser = new DOMParser();

    return html`
        <details class="codeBlock" onclick=${() => setUrl(path)}>
            <summary>${() => type()}</summary>
            <${Show}
                when=${!code.isLoading}
                fallback=${html`<p aria-busy="true">loading...</p>`}
            >
                ${CopyButton(() => code())}
                <pre>
					<code>
						${() =>
                    code() &&
                    parser.parseFromString(
                        hljs.highlightAuto(code()).value,
                        'text/html',
                    ).body}
					</code>
				</pre>
            <//>
        </details>
    `;
}

async function fetchCode(url) {
    if (!url) return;
    const res = await fetch(url);
    const data = await res.text();
    return data;
}

function getType(string) {
    const type = string.split('.')[1];
    return types[type];
}
