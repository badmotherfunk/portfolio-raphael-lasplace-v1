import gsap from "gsap";
import { TimelineMax } from "gsap/gsap-core";

const loaderBar = document.querySelector(".loader__bar--inner");
const loaderCounter = document.querySelector(".loader__counter");

const handleMousePos = (e) => {
    const CURSOR = document.querySelector('.cursor');
    const CIRCLE = document.querySelector('.circle');
    const HOVER = document.querySelectorAll('.animatedButton');
    const BIGABOUT = document.querySelectorAll('.link');
    const BIGTITLE = document.querySelectorAll('.title');
    const TEXT = document.querySelectorAll('.animatedText');
    const TEXT2 = document.querySelectorAll('.animatedText2');
    const SOCIAL = document.querySelectorAll('.socials');
    const ANIMATEDLINKS = document.querySelectorAll('.header__left');
    const ANIMATEDMAIL = document.querySelectorAll('.header__name');
    const BOX = document.querySelectorAll('.wall');
    
    // Disabled background cursor
    const runMouseOver = () => {
        CURSOR.style.display = "none";
      };

      HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
      SOCIAL.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
      ANIMATEDLINKS.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
      ANIMATEDMAIL.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
      BOX.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

      // Enabled scaled background cursor
      const runMouseOverScale = () => {
        CIRCLE.style.transform = 'scale(2.5)';
      };

      BIGABOUT.forEach(hover => hover.addEventListener('mouseenter', runMouseOverScale));
      BIGTITLE.forEach(hover => hover.addEventListener('mouseenter', runMouseOverScale));
      TEXT.forEach(hover => hover.addEventListener('mouseenter', runMouseOverScale));
      TEXT2.forEach(hover => hover.addEventListener('mouseenter', runMouseOverScale));

        // Enabled background cursor
        const runMouseLeave = () => {
        CURSOR.style.display = "flex";     
        };

        HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
        SOCIAL.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
        ANIMATEDLINKS.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
        ANIMATEDMAIL.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
        BOX.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));

        // Disabled scaled background cursor
        const runMouseLeave2 = () => {
            CIRCLE.style.transform = '';  
        };

        BIGABOUT.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave2));
        BIGTITLE.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave2));
        TEXT.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave2));
        TEXT2.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave2));

    
    };
  document.addEventListener('mousemove', handleMousePos);

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
        gsap.to(".loader", {
            delay: 1,
            opacity: 0,
            display: "none"
        });
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
const links = document.querySelectorAll('.animatedLinks');
const contact = document.querySelector('.header__right');

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

contact.addEventListener('click', () => {
    hamburger.classList.remove("active");
    closeDropDown.classList.remove('active');
    crossDropDown.classList.add('remove');
    wrapper.classList.add('remove');
})

links.forEach(function (item) {
    item.addEventListener('click', function () {
        hamburger.classList.remove("active");
        closeDropDown.classList.remove('active');
        crossDropDown.classList.add('remove');
        wrapper.classList.add('remove');
    });
});


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
.typeString(',  a thirty-one-years-old <em><span class="media__text"> front-end </span></em> web developer from <em><span class="media__text">france</span></em>.')
.pauseFor(1000)
.typeString('<br> I like to do stuff with <em><span class="media__text">Css</span></em>.')
.pauseFor(1000)
.deleteChars(5)
.typeString('<em><span class="media__text">Javascript</span></em>.')
.pauseFor(1000)
.deleteChars(12)
.typeString('<em><span class="media__text">React.js !</span></em>')
.pauseFor(1000)
.typeString('<br> I\'m passionate about crafting <em><div class="animatedText"; data-text="interactive";><span>beautiful</span></div></em> & <em><div class="animatedText2"; data-text="creative";><span>designed</span></div></em> websites.')
.start()


// GSAP About Animation ScrollMagic
const presentationContainer = document.querySelector('.about__image');
const titrePres = document.querySelector('.about__title__container');
const textPres = document.querySelector('.about__text');
const textDesc = document.querySelector('.about__description__container');

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: 300, opacity: 0, duration: 0.8})
.from(textPres, {y: 300, opacity: 0, duration: 0.6})
.from(textDesc, {y: 300, opacity: 0, duration: 0.6})

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    reverse: false
})
.setTween(tlpres)
.addTo(controller)


// GSAP SKILLS Animations
const skillsContainer = document.querySelector('.skills__header');
const box = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const box10 = document.querySelector('.box10');


const tlskills = new TimelineMax();

tlskills
.from(box, {x: 600, opacity: 0, duration: 0.3})
.from(box2, {x: 600, opacity: 0, duration: 0.3})
.from(box3, {x: 600, opacity: 0, duration: 0.3})
.from(box4, {x: 600, opacity: 0, duration: 0.3})
.from(box5, {x: 300, opacity: 0, duration: 0.3})
.from(box6, {x: 300, opacity: 0, duration: 0.3})
.from(box7, {x: 300, opacity: 0, duration: 0.3})
.from(box8, {x: 300, opacity: 0, duration: 0.3})
.from(box9, {x: 300, opacity: 0, duration: 0.3})
.from(box10, {x: 300, opacity: 0, duration: 0.5})


const controllerSkills = new ScrollMagic.Controller();

const skillsScene = new ScrollMagic.Scene({
    triggerElement: skillsContainer,
    reverse: false
})
.setTween(tlskills)
.addTo(controllerSkills)


// Project slider image

const track = document.querySelector(".image-track")

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


// Project Modal

const modal = document.querySelector('.modal');
const projectContainer = document.querySelector('.modal__overlay')
const buttonContainer = document.querySelectorAll('.overlay-container');


buttonContainer.forEach(function (item) {
    item.addEventListener('click', function () {
        modal.style.display = "block";
    });
});


 const kasa = document.querySelector('.kasa');

//  const kasaModalTitle = document.querySelector('.modal__container__title');
//  const kasaModalDescription = document.querySelector('.modal__container__description');
//  const kasaTag1 = document.querySelector('.tag1')
//  const kasaTag2 = document.querySelector('.tag2')
//  const kasaPicture = document.querySelector('.modal__container__image__container')

 // When the user click anywhere outside the modal, close it
//  const modalCross = document.querySelector('.modal-cross');
// window.addEventListener('click', function(event) {
//     if (event.target === projectContainer || event.target === modalCross) {
//         modal.style.display = "none";
//     }
//  })


//  kasa.addEventListener('click', () => {
//     kasaModalTitle.innerText = "Kasa";
//     kasaModalDescription.innerText = "Kasa is an 10-years-old agency specialized in the private rental. They recently decided to upgrade their web app using Node-Js for the back-end, and React-Js for the front-end.\n The aim of this project is to set up a React application with reusable components and to make API calls to retrieve data."
//     kasaTag1.innerText = "Node.js"
//     kasaTag2.innerText = "React"
//     kasaPicture.innerHTML ='<img src="">';

//  })


const modalContainer = document.querySelector('.modal')
import crossIconImg from '../images/cross-small.svg';


//OHMYFOOD PROJECT MODAL

const ohmyfood = document.querySelector('.ohmyfood');
ohmyfood.addEventListener("click", generatedOhmyfood)

import pictureOhmyfood from '../images/projects/OhMyFood_mockup.webp'

function generatedOhmyfood() {
    
    const modal = document.createElement('div');
    modal.className = 'modal__container';

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

    //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "Ohmyfood";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "Ohmyfood is a start-up whose purpose is to reduce waiting time in restaurants by putting online their menus and allowing customers to order them in advance.\n This project was focused on animations created in CSS and the use of Sass."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureOhmyfood;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk/ohmyfood';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button'
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github'

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsLayout3 = document.createElement('div');
    tagsLayout3.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'HTML'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag1';
    tagsText2.innerText = 'CSS'
    const tagsText3 = document.createElement('div')
    tagsText3.className = 'tags__container__layout--tags tag2';
    tagsText3.innerText = 'Javascript'
    
    //Overlay
    modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal);
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2);
    tags.appendChild(tagsLayout3);
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);
    tagsLayout3.appendChild(tagsText3);

    // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
    if (event.target === projectContainer || event.target === modalCross) {
        modalContainer.style.display = "none";
        modalContainer.innerHTML = "";
        }
    })

}


// KASA PROJECT MODAL

import pictureKasa from '../images/projects/KasaMockup.webp'

kasa.addEventListener("click", generatedKasa)

function generatedKasa() {
    const modal = document.createElement('div');
    modal.className = 'modal__container'

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

     //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "Kasa";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "Kasa is an 10-years-old agency specialized in the private rental. They recently decided to upgrade their web app using Node-Js for the back-end, and React-Js for the front-end.\n The aim of this project is to set up a React application with reusable components and to make API calls to retrieve data."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureKasa;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk/kasa';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button';
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github';

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsLayout3 = document.createElement('div');
    tagsLayout3.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'Node.js'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag1';
    tagsText2.innerText = 'React'
    const tagsText3 = document.createElement('div')
    tagsText3.className = 'tags__container__layout--tags tag2';
    tagsText3.innerText = 'Sass'
    
    //Overlay
     modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal)
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2);
    tags.appendChild(tagsLayout3);
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);
    tagsLayout3.appendChild(tagsText3);

     // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
     if (event.target === projectContainer || event.target === modalCross) {
         modalContainer.style.display = "none";
         modalContainer.innerHTML = "";
        }
    })

}


// ARGENTBANK PROJECT MODAL

const argentBank = document.querySelector('.argentBank')

import pictureArgentBank from '../images/projects/argentBank_mockup.webp'

argentBank.addEventListener("click", generatedArgentBank)

function generatedArgentBank() {
    const modal = document.createElement('div');
    modal.className = 'modal__container'

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

     //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "ArgentBank";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "ArgentBank is an online banking site. It allows users to log in, view their transactions and modify their informations.\n The aim of this project was to implement a React application, set up user interactions using an API, and create the future Swagger implementation. \n Notably using Redux and MongoDb."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureArgentBank;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk?tab=repositories';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button';
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github';

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsLayout3 = document.createElement('div');
    tagsLayout3.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'React'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag1';
    tagsText2.innerText = 'Redux'
    const tagsText3 = document.createElement('div')
    tagsText3.className = 'tags__container__layout--tags tag2';
    tagsText3.innerText = 'MongoDb'
    
    //Overlay
     modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal)
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2);
    tags.appendChild(tagsLayout3);
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);
    tagsLayout3.appendChild(tagsText3);


     // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
     if (event.target === projectContainer || event.target === modalCross) {
         modalContainer.style.display = "none";
         modalContainer.innerHTML = "";
        }
    })

}


// SOPHIE BUEL PROJECT MODAL

const sophieBuel = document.querySelector('.sophieBuel')

import pictureSophie from '../images/projects/sophieBuel_mockup.webp'

sophieBuel.addEventListener("click", generatedSophieBuel)

function generatedSophieBuel() {
    const modal = document.createElement('div');
    modal.className = 'modal__container'

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

     //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "Sophie Buel";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "Sophie Buel is an interior designer.\n The aim of this project was to create a portfolio that allows users to log in, add projects to the home page, filter projects, and delete projects via modals.\n This project involved making calls to an API, and creating projects dynamically in Javascript."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureSophie;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk/portfolio-sophie-buel';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button';
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github';

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsLayout3 = document.createElement('div');
    tagsLayout3.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'HTML'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag1';
    tagsText2.innerText = 'CSS'
    const tagsText3 = document.createElement('div')
    tagsText3.className = 'tags__container__layout--tags tag2';
    tagsText3.innerText = 'Javascript'
    
    //Overlay
     modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal)
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2);
    tags.appendChild(tagsLayout3);
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);
    tagsLayout3.appendChild(tagsText3);


     // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
     if (event.target === projectContainer || event.target === modalCross) {
         modalContainer.style.display = "none";
         modalContainer.innerHTML = "";
        }
    })

}


// BOOKI PROJECT MODAL

const booki = document.querySelector('.booki');

import pictureBooki from '../images/projects/booki_mockup.webp'

booki.addEventListener("click", generatedBooki)

function generatedBooki() {
    const modal = document.createElement('div');
    modal.className = 'modal__container'

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

     //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "Booki";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "Booki is a company offering a vacation planning tool.\n The site allows users to find accommodation and activities in the city of their choice. \n The aim of this project was to create a prototype site by integrating the mock-up designed by the UI designer, in HTML and CSS. The site had to be responsive, of course."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureBooki;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container booki__button';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk?tab=repositories';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button';
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github';

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container booki__tags';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'HTML'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag2';
    tagsText2.innerText = 'CSS'
    
    //Overlay
     modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal)
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2)
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);

     // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
     if (event.target === projectContainer || event.target === modalCross) {
         modalContainer.style.display = "none";
         modalContainer.innerHTML = "";
        }
    })

}


// MENU MAKER BY QWENTA PROJECT MODAL

const menuMaker = document.querySelector('.menuMaker');

import pictureMenuMaker from '../images/projects/booki_mockup.webp'

menuMaker.addEventListener("click", generatedMenuMaker)

function generatedMenuMaker() {
    const modal = document.createElement('div');
    modal.className = 'modal__container'

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

     //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "Menu Maker by Qwenta";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "Booki is a company offering a vacation planning tool.\n The site allows users to find accommodation and activities in the city of their choice. \n The aim of this project was to create a prototype site by integrating the mock-up designed by the UI designer, in HTML and CSS. The site had to be responsive, of course."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureBooki;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk?tab=repositories';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button';
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github';

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsLayout3 = document.createElement('div');
    tagsLayout3.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'Agile'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag1';
    tagsText2.innerText = 'Kanban'
    const tagsText3 = document.createElement('div')
    tagsText3.className = 'tags__container__layout--tags tag2';
    tagsText3.innerText = 'Gestion'
    
    //Overlay
     modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal)
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2);
    tags.appendChild(tagsLayout3);
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);
    tagsLayout3.appendChild(tagsText3);

     // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
     if (event.target === projectContainer || event.target === modalCross) {
         modalContainer.style.display = "none";
         modalContainer.innerHTML = "";
        }
    })

}



// NNINA CARDUCCI PROJECT MODAL

const ninaCarducci = document.querySelector('.ninaCarducci');

import pictureNina from '../images/projects/booki_mockup.webp'

ninaCarducci.addEventListener("click", generatedNinaCarducci)

function generatedNinaCarducci() {
    const modal = document.createElement('div');
    modal.className = 'modal__container'

    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';

     //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross title'
    crossIcon.src = crossIconImg;

    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title title"
    title.innerText = "Nina Carducci - Photographer";

    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'

    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = "Booki is a company offering a vacation planning tool.\n The site allows users to find accommodation and activities in the city of their choice. \n The aim of this project was to create a prototype site by integrating the mock-up designed by the UI designer, in HTML and CSS. The site had to be responsive, of course."
    
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = pictureBooki;

    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container booki__button';
    const buttonLink = document.createElement('a');
    buttonLink.href = 'https://github.com/badmotherfunk/Nina-Carducci-web-site-optimisation';
    buttonLink.target = '_blank';
    const button = document.createElement('button');
    button.className = 'project__button';
    const buttonText = document.createElement('span')
    buttonText.className = 'project__button__text';
    buttonText.innerText = 'Github';

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';
    const tagsLayout = document.createElement('div');
    tagsLayout.className = 'tags__container__layout';
    const tagsLayout2 = document.createElement('div');
    tagsLayout2.className = 'tags__container__layout';
    const tagsLayout3 = document.createElement('div');
    tagsLayout3.className = 'tags__container__layout';
    const tagsText = document.createElement('div')
    tagsText.className = 'tags__container__layout--tags tag1';
    tagsText.innerText = 'SEO'
    const tagsText2 = document.createElement('div')
    tagsText2.className = 'tags__container__layout--tags tag1';
    tagsText2.innerText = 'Accessibility'
    const tagsText3 = document.createElement('div')
    tagsText3.className = 'tags__container__layout--tags tag2';
    tagsText3.innerText = 'Optimisation'
    
    //Overlay
     modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal)
    //Icon
    modal.appendChild(crossIcon);
    //Title
    modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonLink);
    buttonLink.appendChild(button);
    button.appendChild(buttonText);
    //Tags
    modal.appendChild(tags);
    tags.appendChild(tagsLayout);
    tags.appendChild(tagsLayout2);
    tags.appendChild(tagsLayout3);
    tagsLayout.appendChild(tagsText);
    tagsLayout2.appendChild(tagsText2);
    tagsLayout3.appendChild(tagsText3);

     // When the user click anywhere outside the modal, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
     if (event.target === projectContainer || event.target === modalCross) {
         modalContainer.style.display = "none";
         modalContainer.innerHTML = "";
        }
    })

}



