import { html } from 'https://esm.sh/@arrow-js/core';

const codeBlock = (data) => {
    return html`
        <section>
            <hgroup>
                <h3>${data.title}</h3>
                <h4>${data.desc}</h4>
            </hgroup>

            ${data.code.map((code) => {
                return html`
                    <details>
                        <summary>${code.type}</summary>
                        <pre>
							<code>
								${hljs.highlightAuto(code.code).value}
							</code>
						</pre>
                    </details>
                `;
            })}
        </section>
    `;
};

export default codeBlock;
