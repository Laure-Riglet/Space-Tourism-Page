let wrapperCurrentClasses = document.querySelector('#wrapper').classList;

// HEADER

function toogleNavOnOff() {
    let nav = document.getElementById('nav-menu');
    nav.classList.toggle('on');
}

let hamburgerIcon = document.querySelector('nav img');
hamburgerIcon.addEventListener('click', toogleNavOnOff);
let closeIcon = document.querySelector('#nav-menu img');
closeIcon.addEventListener('click', toogleNavOnOff);

// HOME

if (wrapperCurrentClasses.contains('home')) {
let exploreButton = document.querySelector('.explore');
exploreButton.addEventListener('click', toogleNavOnOff);
}
