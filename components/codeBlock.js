import { createResource, createSignal, Show, createEffect } from 'solidjs';
import html from 'solidjs-html';
import CopyButton from './copyButton.js';

/**
 * Renders a block of code
 * @param {string} url
 * @returns {Promise<string>} html string
 */
export default function codeBlock(part) {
    const [url, setUrl] = createSignal('');
    const [code] = createResource(url, fetchCode);

    const parser = new DOMParser();

    return html`
        <details onclick=${() => setUrl('./data/response_2.json')}>
            <summary>Javascript</summary>
            <${Show}
                when=${!code.isLoading}
                fallback=${html`<p>loading...</p>`}
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
    const data = await res.json();
    const decoded = atob(data.content);
    return decoded;
}
