import { html } from 'https://esm.sh/@arrow-js/core';
import codeBlock from '../components/codeBlock.js';
import { web } from '../data/web.js';

const webPage = () => {
    return html`
        <div>
            ${web.map((data) => {
                return codeBlock(data);
            })}
        </div>
    `;
};

export default webPage;
