const hiddenMenuItem = document.querySelector('.hidden-menu-item')
const hiddenMenu = document.querySelector('.hidden-menu');
const menu = document.querySelector('.menu');
let w = 0;
const closeButton = document.querySelector('.close-button');

function openMenu() {
    closeButton.style.display = 'inline-block';
    hiddenMenu.style.display = 'flex';
    hiddenMenuItem.style.display = 'none';
}

function closeMenu() {
    hiddenMenu.style.display = 'none';
    closeButton.style.display = 'none';
    w = window.innerWidth || document.documentElement.clientWidth || document.html.clientWidth;
    if (w <= 1000) {
        hiddenMenuItem.style.display = 'block';
    }
    else {
        hiddenMenuItem.style.display = 'none';
    }
}

