let bodyCurrentClasses = document.querySelector('body').classList;

// HEADER

function toogleNavOnOff() {
    let nav = document.getElementById('nav-menu');
    nav.classList.toggle('on');
}

let hamburgerIcon = document.querySelector('nav img');
hamburgerIcon.addEventListener('click', toogleNavOnOff);
let closeIcon = document.querySelector('#nav-menu img');
closeIcon.addEventListener('click', toogleNavOnOff);

// HOME : EXPLORE

function exploreOn() {
    let expandGrayCirle = document.getElementById('expand');
    expandGrayCirle.classList.add('on');
}

function exploreOff() {
    let expandGrayCirle = document.getElementById('expand');
    expandGrayCirle.classList.remove('on');
}

if (bodyCurrentClasses.contains('home')) {
    let exploreDisc = document.querySelector('#explore');
    exploreDisc.addEventListener('mouseover', exploreOn);
    exploreDisc.addEventListener('mouseout', exploreOff);
}
