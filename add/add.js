





window.addEventListener('scroll', () => {
    let scrollDist = window.scrollY;

    // console.log(scrollDist);

    let headerLogo = document.querySelector('.link')
    let headerLogoTwo = document.querySelector('.logo')
    let headerMenu = document.querySelector('.menu__text')
    let headerMenuSpan = document.querySelector('.menu__span')
    let footerPortfolio = document.querySelector('.footer__portfolio')
    let footerEng = document.querySelector('.eng')
    let footerPlanet = document.querySelector('.footer__planet')

    if (scrollDist >= 60) {
        footerPlanet.src='images/planetDark.png';
        footerEng.classList.add('black')
        footerPortfolio.classList.add('black');
    } else {
        footerPlanet.src='images/planetWhite.png'
        footerEng.classList.remove('black')
        footerPortfolio.classList.remove('black');
    }

    if (scrollDist >= 700) {
        headerLogo.classList.add('black');
        headerLogoTwo.classList.add('black');
        headerMenu.classList.add('black');
        headerMenuSpan.classList.add('blackbg');
    } else {
        headerLogo.classList.remove('black');
        headerLogoTwo.classList.remove('black');
        headerMenu.classList.remove('black');
        headerMenuSpan.classList.remove('blackbg');
        headerMenuSpan.classList.add('menu__span');
    }


});

let footerTranslate = document.querySelector('.footer__translate');
let planet = document.querySelector('.footer__planet');
let scrollDist = window.scrollY;

function onFooterTranslate() {

    if (scrollDist >= 60) {
        footerTranslate.classList.add('tran-bg');
        planet.src="images/planetDark.png";

    }
    else if (scrollDist <= 60) {
        footerTranslate.classList.remove('tran-bg');
        planet.src="images/planetWhite.png";
    }

}

function offFooterTranslate() {
    if (scrollDist <= 60) {
        planet.src="images/planetDark.png"

    }
    else if (scrollDist >= 60) {
        planet.src="images/planetWhite.png"
    }

}



window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';

}

let btn = document.querySelector('button');
let windowHeIGHT = document.documentElement.clientHeight;
// alert(windowHeIGHT);


// document.addEventListener('wheel', function() {
//     // останавливаем поведение по умолчанию, то есть прокрутку
//     window.scrollBy(0,100vh);
// });

// document.addEventListener('scroll', function() {
//     // получаем высоту элемента, на котором произошло событие
//     window.scrollBy(0,100vh);
// });

function scrollTo(hash) {
    location.hash = "#" + hash;
}