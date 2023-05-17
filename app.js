import { reactive, html } from 'https://esm.sh/@arrow-js/core';
import navigation from './components/navigation.js';
import webPage from './pages/webPage.js';
import homePage from './pages/homePage.js';
import gamePage from './pages/gamePage.js';
import templatesPage from './pages/templatesPage.js';

const data = reactive({
    currentPage: 'home',
});

html`
    <header>
        <hgroup>
            <h1>My components</h1>
            <h2>
                A collection of my components I've built throughout the years
            </h2>
        </hgroup>
        ${() => navigation(data.currentPage)}
    </header>
    <main>
        ${() => {
            switch (data.currentPage) {
                case 'web':
                    console.log('hej');
                    return webPage();
                case 'home':
                    return homePage();
                case 'game':
                    console.log('hej');
                    return gamePage();
                case 'templates':
                    return templatesPage();
                default:
                    break;
            }
        }}
    </main>
    <footer>Made with Love by Ted</footer>
`(document.getElementById('app'));

const router = new Navigo('/', { hash: true });
router
    .on('/', () => {
        data.currentPage = 'home';
    })
    .on('/web', () => {
        data.currentPage = 'web';
    })
    .on('/game', () => {
        data.currentPage = 'game';
    })
    .on('/templates', () => {
        data.currentPage = 'templates';
    })
    .resolve();
