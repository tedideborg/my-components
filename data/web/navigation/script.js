const primaryHeader = document.getElementById('primary-header');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');

// TODO: Check that this is correct/ working when published
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
