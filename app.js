import {
    Match,
    Switch,
    createEffect,
    createResource,
    createSignal,
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

    window.addEventListener('hashchange', handleLocaiton);
    handleLocaiton();

    return html`
        ${() => navigation(page(), pages)}
        <main>
            <${Switch}>
                <${Match} when=${() => pages.error}>
                    ${html`<div class="alert-danger" role="alert">
                        Too many fetch requests to github. Come back in an hour
                    </div>`}
                <//>
                <${Match} when=${() => page() === 'home'}> ${homePage()} <//>
                <${Match} when=${() => page() !== 'home'}>
                    ${() => codePage(page())}
                <//>
            <//>
        </main>
        <footer>Made with ❤️ by Ted</footer>
    `;
}

render(App, document.getElementById('app'));

async function setupNavigation() {
    return getDataFromGithub(rootUrl, 'dirs');
}

async function handleLocaiton() {
    let location = window.location.hash.replace('#', '');
    if (location.length == 0) {
        location = 'home';
    }
    setPage(location);
}

/**
 * Gets data from github and looks out for 403 errors
 * @param {string} url The url it should fetch from Github
 * @param {string} type What type, dir or file
 * @returns {Promise<Array>} An array of items, either dirs or files
 */
export async function getDataFromGithub(url, type) {
    const res = await fetch(url);
    if (res.status === 403) throw new Error('Too many requests to github');
    const data = await res.json();
    let items = [];
    if (type === 'dirs') {
        items = data
            .filter((item) => item.type === 'dir')
            .map((item) => item.name);
    } else if (type === 'files') {
        items = data.filter((item) => {
            if (item.type === 'file') {
                return item;
            }
        });
    }
    return items;
}
