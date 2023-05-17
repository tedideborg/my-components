import { reactive, html } from 'https://esm.sh/@arrow-js/core';

const navigaiton = (currentPage) => {
    return html`
        <nav>
            <ul>
                <li>
                    <a href="/" data-navigo>Home</a>
                </li>
                <li>
                    <a href="/web" data-navigo>Web</a>
                </li>
                <li>
                    <a href="/game" data-navigo>Game</a>
                </li>
                <li>
                    <a href="/templates" data-navigo>Templates</a>
                </li>
            </ul>
        </nav>
    `;
};

export default navigaiton;
