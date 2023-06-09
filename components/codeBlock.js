import { createResource, createSignal, Show, createEffect } from 'solidjs';
import html from 'solidjs-html';
import CopyButton from './copyButton.js';

/**
 * Renders a block of code
 * @param {string} path
 * @returns {Promise<string>} html string
 */
export default function codeBlock({ path }) {
    const [url, setUrl] = createSignal('');
    const [code] = createResource(url, fetchCode);

    const parser = new DOMParser();

    return html`
        <details onclick=${() => setUrl(path)}>
            <summary>Javascript</summary>
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
    console.log(url);
    const res = await fetch(url);
    console.log(res);
    const data = await res.text();
    // console.log(data);
    // const decoded = atob(data.content);
    return data;
}
