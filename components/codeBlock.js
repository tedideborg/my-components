import { Show, createResource, createSignal, createEffect } from 'solidjs';
import html from 'solidjs-html';
import CopyButton from './copyButton.js';

const types = {
    js: 'javascript',
    html: 'html',
    css: 'css',
};

/**
 * Renders a block of code
 * @param {Object} data Object of data
 * @param {string} data.path url to the code
 * @returns {Promise<string>} html string
 */
export default function codeBlock({ path }) {
    const [url, setUrl] = createSignal('');
    const [type, setType] = createSignal(() => getType(path));
    const [className, setClassName] = createSignal('language-js');
    const [code] = createResource(url, fetchCode);

    createEffect(() => {
        const newClassName = 'language-' + getType(path);
        setClassName(newClassName);
    });

    return html`
        <details class="codeBlock" onclick=${() => setUrl(path)}>
            <summary>${() => type()}</summary>
            <${Show}
                when=${!code.isLoading}
                fallback=${html`<p aria-busy="true">loading...</p>`}
            >
                ${CopyButton(() => code())}
                <pre>
					<code class=${className()}>
						${() => code()}
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
