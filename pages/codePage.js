import html from 'solidjs-html';
import componentsList from '../components/componentsList.js';
import { rootUrl } from '../app.js';

/**
 * The page that contains all the code
 * @param {string} part The part of the url
 * @returns html string of the site
 */
export default function codePage(part) {
    return html` <h1>${`${part} components`}</h1>
        ${componentsList(rootUrl + part)}`;
}
