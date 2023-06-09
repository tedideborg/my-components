import html from 'solidjs-html';

export default function homePage() {
    return html`
        <div class="container">
            <section>
                <h2>Components</h2>
                <p>
                    A random collections of nice, reusable components and/ or
                    code snippets I've found throughout the years that I think
                    is worth remembering or use more of in the future.
                </p>
            </section>
            <section>
                <h2>This site</h2>
                <p>
                    I also built this website as a test for not using any build
                    tools (no webpack, npm or anything like that). I've used
                    SolidJs, Navigo and Pico css to build it. It's small, it's
                    fast and it's extremely easy to get up and running with it.
                </p>
            </section>
        </div>
    `;
}
