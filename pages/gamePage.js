import { html } from 'https://esm.sh/@arrow-js/core';
import codeBlock from '../components/codeBlock.js';
import { games } from '../data/games.js';

const gamePage = () => {
    return html`
        ${games.map((data) => {
            return codeBlock(data);
        })}
    `;
};

export default gamePage;
