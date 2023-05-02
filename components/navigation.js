import { reactive, html } from 'https://esm.sh/@arrow-js/core';

const navigaiton = () => {
    return html`
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="./about/">About</a></li>
            </ul>
        </nav>
    `;
};

export default navigaiton;
