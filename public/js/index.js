const backG = document.querySelector(".background");

window.onload = () => {
    setTimeout(() => {
        backG.style.display = "none";
    }, 1000)
};



//STICKY navigation on scroll
const burger = document.querySelector(".burger");
const navigation = document.querySelector('.navigation-bar');
const navList = document.querySelector('.navigation-bar-lists');
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (window.scrollY) {
        navigation.classList.add('sticky');
        burger.classList.add('Bsticky');
    } else {
        navigation.classList.remove('sticky');
        burger.classList.remove("Bsticky");

    }
}


//ACTIVE page checks
const activePath = window.location.pathname;
const main_Content = document.querySelector('.main-body');
document.querySelectorAll('.navigation-bar .navigation-bar-lists li a').forEach(link => {
    if (link.href.includes(`${activePath}`)) link.classList.add('active');
    const activeLink = document.querySelector('.active');
    main_Content.classList.add('shrinkSlide');
    main_Content.classList.remove('SlideIN');
    if (activeLink) {
        setTimeout(() => {
            if (activeLink) {
                main_Content.classList.add('SlideIN');
                main_Content.classList.remove('shrinkSlide');
            }
        }, 1000);
    }
});
if (main_Content) {

    console.log(main_Content.hasChildNodes());
}

//BURGER CLICK
const navlists = document.querySelectorAll('.navigation-bar .navigation-bar-lists li a');
const navBar = document.querySelector('.navigation-bar');
if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('activeBurger');
        navBar.classList.toggle('nav-visible');
    })
}


//CONTENT DISPLAYED

const contentText = document.querySelector('.contents');
const slogan = document.querySelector('.slogan-pics');
var arr = ['We keep you Alive and in Tech', 'We Solve Problems', 'We make it readable and responsive'];
var i = 0;
if (slogan) {
    function slides() {
        contentText.innerHTML = arr[i];
        if (i < arr.length - 1) i++;
        else i = 0;
        setTimeout('slides()', 5000);
    }
    slides();
}

//SERVICES SLIDES


var images = [
    "../../public/images/css.jpg",
    "../../public/images/figma.jpeg",
    "../../public/images/js.png",
    "../../public/images/LogoF.gif",
];
var color = ['yellow', 'lightgreen', 'lightblue', 'mediumpurple'];

const circleA = document.querySelector('.bowl_right');
const bowlL = document.querySelector('.bowl');
var i = 0;
var j = 3;

if (circleA) {
    function imageChange() {

        document.images_right.src = images[i];
        document.image.src = images[j];
        circleA.style.backgroundColor = color[i];
        bowlL.style.backgroundColor = `${color[i]}`;
        if (i < images.length - 1) {
            i++;
            j--;
        } else {
            i = 0;
            j = 3;
        }
        setTimeout('imageChange()', 5000);
    }

    imageChange();
}