import gsap from "gsap";

const loaderBar = document.querySelector(".loader__bar--inner");
const loaderCounter = document.querySelector(".loader__counter");
const introductionTxt =document.querySelector('.introduction');

// Mouse animation

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "#FFFFFF";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();



// Counter size depending screen size
var range = 15 / 400;
var vw = range * Math.min(window.innerWidth, window.innerHeight);

document.documentElement.style.setProperty('--vw-scale', `${vw}`);

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vw-scale', `${range * Math.min(window.innerWidth, window.innerHeight)}`);
});

// Media queries Counter
let mm = gsap.matchMedia();
mm.add("(min-width: 1950px)", () => {
    var range = 13 / 400;
    var vw = range * Math.min(window.innerWidth, window.innerHeight);
    document.documentElement.style.setProperty('--vw-scale', `${vw}`);
});
mm.add("(max-width: 1505px)", () => {
    var range = 11 / 400;
    var vw = range * Math.min(window.innerWidth, window.innerHeight);
    document.documentElement.style.setProperty('--vw-scale', `${vw}`);
});
mm.add("(max-width: 1024px)", () => {
    var range = 9 / 400;
    var vw = range * Math.min(window.innerWidth, window.innerHeight);
    document.documentElement.style.setProperty('--vw-scale', `${vw}`);
});
mm.add("(max-width: 768px)", () => {
    var range = 8 / 400;
    var vw = range * Math.min(window.innerWidth, window.innerHeight);
    document.documentElement.style.setProperty('--vw-scale', `${vw}`);
});


// GSAP Loader animation
let count = 0;
const counter = document.querySelector('.loader__counter');

let barInterval = setInterval(() => {
    loaderBar.style.width = count + "%";
    loaderCounter.innerText = count + "%";
    count++;
    if(count === 101) {
        counter.classList.add('active');
        clearInterval(barInterval);
        gsap.to(".loader__counter, loader__bar--inner, loader__bar", {
            duration: 1.5,
            display: "none",
        });
        gsap.to(".loader__box", {
            duration: 0.3,
            opacity: 0,
        });
        gsap.to(".loader__counter", {
            duration: 1,
            delay: 0.3,
            opacity: 0.5,
            right: "50%",
        });
        gsap.to(".loader__counter", {
            duration: 1,
            delay: 0.4,
            opacity: 0.4,
            right: "60%",
        });
        gsap.to(".loader__counter", {
            delay: 0.9,
            duration: 0.5,
            right: "300%",
            opacity: 0,
        });
        gsap.to(".layout", {
            delay: -0.5,
            duration: 4, ease: "bounce.inOut",
            right: "300%",
        });
        gsap.to(".background", {
            visibility: "visible",
            duration: 0.5,
            delay: 1.3,
            height: "500px",
            borderRadius: "50%",
        });
        gsap.to(".background__svg", {
            opacity: 1,
            duration: 3,
            delay: 1.3,
            rotate: "360deg",
        });
        gsap.to(".background", {
            duration: 1,
            border: "none",
        });
        gsap.to(".loader", {
            delay: 1,
            duration: 3,
            zIndex: 1,
            background: "transparent",
            opacity: 0.5,
        });
        gsap.to(".introduction", {
            delay: 1,
            duration: 2,
            zIndex: 5,
            right: "-300%",
        });
        gsap.to(".introduction", {
            delay: 1,
            duration: 2, ease: "power2.out", x: 0,
            zIndex: 5,
            right: "0",
        });
        // gsap.to(".background__svg", {
        //     delay: 4.2,
        //     duration: 100,
        //     rotate: "360deg",
        // });
    }
}, 35)


// Background sphere following mouse position
let lastMouseX = 0,
    lastMouseY = 0;
let rotX = 0,
    rotY = 0;

const setRotX = gsap.quickSetter(".background", "rotationX");
const setRotY = gsap.quickSetter(".background", "rotationY");

document.addEventListener("mousemove", mouseMoved);

function mouseMoved(ev) {
  var deltaX = ev.pageX - lastMouseX;
  var deltaY = ev.pageY - lastMouseY;

  lastMouseX = ev.pageX;
  lastMouseY = ev.pageY;

  rotY -= deltaX * 0.01;
  rotX += deltaY * 0.01;

  setRotX(rotX + 'deg');
  setRotY(rotY + 'deg');
}


// DropDown Menu
const hamburgerContainer = document.querySelector('.dropDown');
const hamburger = document.querySelector('.dropDown__hamburger');
const closeDropDown = document.querySelector('.header__closeDropDown')
const crossDropDown = document.querySelector('.animated__closeDropDown');
const wrapper = document.querySelector('.header__wrapper');

hamburgerContainer.addEventListener('click', () => {
    hamburger.classList.add('active');
    closeDropDown.classList.add('active');
    crossDropDown.classList.remove('remove');
    wrapper.classList.add('active');
    wrapper.classList.remove('remove');
})

closeDropDown.addEventListener('click', () => {
    hamburger.classList.remove("active");
    closeDropDown.classList.remove('active');
    crossDropDown.classList.add('remove');
    wrapper.classList.add('remove');
})


// Writing animation

const txtAnim = document.querySelector('.introduction__text');

let typeWriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})


typeWriter
.pauseFor(8100)
.changeDelay(20)
.typeString('I\'m <span class="media__text"> Raphaël</span>')
.pauseFor(300)
.typeString(',  a thirty-years-old <em><span class="media__text"> front-end </span></em> web developer from <em><span class="media__text">france</span></em>.')
.pauseFor(1000)
.typeString('<br> I like to do stuff with <em><span class="media__text">Css</span></em>.')
.pauseFor(1000)
.deleteChars(5)
.typeString('<em><span class="media__text">Javascript</span></em>.')
.pauseFor(1000)
.deleteChars(12)
.typeString('<em><span class="media__text">React.js !</span></em>')
.pauseFor(1000)
.typeString('<br> I\'m passionate about crafting <em><div class="animatedText"; data-text="interactive";><span class="animatedText">beautiful</span></div></em> & <em><div class="animatedText2"; data-text="creative";><span class"animatedText2">designed</span></div></em> websites.')
.start()

