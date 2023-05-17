import { html } from 'https://esm.sh/@arrow-js/core';

const homePage = () => {
    return html`
        <div class="container">
            <article>
                Web components that I've gathered throught the years.
            </article>
            <article>My components that I've used for games.</article>
            <article>
                Some random templates for getting up and running quickly.
            </article>
        </div>
    `;
};

export default homePage;
