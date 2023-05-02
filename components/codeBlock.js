import { html } from 'https://esm.sh/@arrow-js/core';

const codeBlock = (data) => {
    return html`
        <section>
            <hgroup>
                <h1>${data.title}</h1>
                <h2>${data.desc}</h2>
            </hgroup>

            ${data.code.map((code) => {
                return html`
                    <details>
                        <summary>${code.type}</summary>
                        <pre>
							<code>
								${code.code}
							</code>
						</pre>
                    </details>
                `;
            })}
        </section>
    `;
};

export default codeBlock;
