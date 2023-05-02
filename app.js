import { reactive, html } from 'https://esm.sh/@arrow-js/core';
import navigation from './components/navigation.js';
import codeBlock from './components/codeBlock.js';
import { web } from './data/web.js';
import { games } from './data/games.js';

html`
    <header>
        <hgroup>
            <h1>My components</h1>
            <h2>
                A collection of my components I've built throughout the years
            </h2>
        </hgroup>
        ${navigation}
    </header>
    <main>
        <h1>Web</h1>
        ${web.map((data) => {
            return codeBlock(data);
        })}
        <h1>Games</h1>
        ${games.map((data) => {
            return codeBlock(data);
        })}
    </main>
    <footer>Made with Love by Ted</footer>
`(document.getElementById('app'));
