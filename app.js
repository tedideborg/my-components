import {
    createEffect,
    createResource,
    createSignal,
    Switch,
    Match,
    onMount,
} from 'solidjs';
import html from 'solidjs-html';
import { render } from 'solidjs-web';
import navigation from './components/navigation.js';
import codePage from './pages/codePage.js';
import homePage from './pages/homePage.js';

export const rootUrl =
    'https://api.github.com/repos/tedideborg/my-components/contents/data/';

const [page, setPage] = createSignal('home');

function App() {
    const [pages] = createResource(setupNavigation);

    createEffect(() => {
        if (pages.loading) return;
        initialiseRouter();
    }, [pages]);

    return html`
        <header>
            <hgroup>
                <h1>My components</h1>
                <h2>
                    A collection of my components I've built throughout the
                    years
                </h2>
            </hgroup>
        </header>
        ${() => navigation(page(), pages)}
        <main>
            <${Switch}>
                <${Match} when=${() => page() === 'home'}> ${homePage()} <//>
                <${Match} when=${() => page() !== 'home'}>
                    ${() => codePage(page())}
                <//>
            <//>
        </main>
        <footer>Made with Love by Ted</footer>
    `;
}

render(App, document.getElementById('app'));

async function setupNavigation() {
    let res = await fetch(rootUrl);
    let data = await res.json();
    let dirs = data
        .filter((item) => item.type === 'dir')
        .map((item) => item.name);
    return dirs;
}

function initialiseRouter() {
    const router = new Navigo('/', { hash: true });
    router
        .on('/', () => {
            setPage('home');
        })
        .on('/:page', ({ data }) => {
            console.log(data);
            setPage(data.page);
        })
        .resolve();
}
