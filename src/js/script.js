// Navigation stuff
// Vars
const navigation = document.querySelector('.navigation');
const desktop = document.querySelector('.desktop__nav');
const mobile = document.querySelector('.mobile__nav');
const toggle = document.querySelector('.toggle__links');

// Setup
const maxWidthForMobileNav = 700;
const mediaQuery = window.matchMedia(`(max-width: ${maxWidthForMobileNav}px)`);

// Functions
function checkWidth() {
  if (mediaQuery.matches) {
    // Enable Mobile
    desktop.style.display = 'none';
    mobile.style.display = 'flex';
  } else {
    // Disable Mobile
    mobile.style.display = 'none';
    desktop.style.display = 'flex';
    // addEvents();
  }
}

// EventsListeners
window.addEventListener('resize', checkWidth);
window.addEventListener('DOMContentLoaded', checkWidth);
window.addEventListener('scroll', scroll);

toggle.addEventListener('click', () => {
  mobile.classList.toggle('opened');
});

let lastScroll = window.scrollY;
function scroll() {
  // Scrolling Down ? ... : ... (Scrolling Up)
  window.scrollY > lastScroll
    ? navigation.classList.add('hidden')
    : navigation.classList.remove('hidden');

  lastScroll = window.scrollY;
}
