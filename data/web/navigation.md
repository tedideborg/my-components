An accesible and modern navigation using vanilla javascript, css and html

#### Javascript

```javascript
const primaryHeader = document.getElementById('primary-header');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');

if (window.location.pathname === '/projects/') {
    projectsLink.classList.toggle('active');
} else if (window.location.pathname === '/') {
    homeLink.classList.toggle('active');
}

// primaryHeader.addEventListener("click", () => {
// 	toggleNav(primaryNavigation.hasAttribute("data-visible"));
// })

mobileNavToggle.addEventListener('click', () => {
    toggleNav(primaryNavigation.hasAttribute('data-visible'));
});

const toggleNav = (open = true) => {
    if (open) {
        mobileNavToggle.setAttribute('area-expanded', 'false');
    } else {
        mobileNavToggle.setAttribute('area-expanded', 'true');
    }
    primaryNavigation.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
};
```

#### HTML

```HTML
<header class="primary-header" id="primary-header">
    <div class="container columns-spaced">
        <a href="/" class="fs-secondary-heading">
            Ted Ideborg
        </a>
        <button
            class="mobile-nav-toggle"
            id="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
        >
            <img class="hamburger" src="/icons/hamburger.svg" alt="" />
            <img class="close" src="/icons/close.svg" alt="" />
            <span class="visually-hidden">Menu</span>
        </button>
        <nav class="primary-navigation columns-spaced" id="primary-navigation">
            <ul aria-label="Primary" role="list" class="nav-list">
                <li>
                    <a href="/">
                        <h4 class="fs-medium-heading" id="home-link">
                            Home
                        </h4>
                    </a>
                </li>
                <li>
                    <a href="/projects">
                        <h4 class="fs-medium-heading" id="projects-link">
                            Projects
                        </h4>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
```

#### CSS

```CSS
.primary-header {
    background-color: #ffedae;
    padding: 30px 0;
}

.primary-navigation {
    gap: 55px;
}

.nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: var(--sp-700);
}

.mobile-nav-toggle {
    cursor: pointer;
    background: transparent;
    border: 0;
    padding: 0.5em;
    display: none;
}

.mobile-overlay {
    display: none;
}

.active {
    text-decoration: underline;
}

@media (max-width: 50em) {
    .mobile-nav-toggle {
        display: block;
    }

    nav.primary-navigation {
        display: none;
        position: absolute;
        padding: var(--sp-700);
        inset: 7.6rem var(--sp-700) auto;
        background-color: var(--clr-neutral-100);
        border-radius: var(--sp-200);
    }

    .nav-list {
        grid-auto-flow: row;
        gap: var(--sp-600);
        text-align: center;
    }

    .nav-list a:hover,
    .nav-list a:focus {
        color: var(--clr-neutral-700);
    }

    .primary-navigation[data-visible] {
        display: block;
    }

    .primary-header[data-overlay]::before {
        content: '';
        display: block;
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.25);
    }

    .mobile-nav-toggle[area-expanded='true'] > .hamburger {
        display: none;
    }
    .mobile-nav-toggle[area-expanded='true'] > .close {
        display: block;
    }
}

.mobile-nav-toggle .close {
    display: none;
    position: relative;
    z-index: 2;
    padding-right: 0.4rem;
}

```
