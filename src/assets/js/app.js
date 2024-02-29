import gsap from "gsap";
import { TimelineMax } from "gsap/gsap-core";

const loaderBar = document.querySelector(".loader__bar--inner");
const loaderCounter = document.querySelector(".loader__counter");

// Mouse animation
const handleMousePos = (e) => {
    const CURSOR = document.querySelector('.cursor');
    const CIRCLE = document.querySelector('.circle');
    const BIGHOVER = document.querySelectorAll('.bigHover');
    const DISABLEDHOVER = document.querySelectorAll('.disabledHover');

    // Disabled background cursor
    const runMouseOver = () => {
        CURSOR.style.display = "none";
      };

      DISABLEDHOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

      // Enabled scaled background cursor
      const runMouseOverScale = () => {
        CIRCLE.style.transform = 'scale(2.5)';
      };

      BIGHOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOverScale));

        // Enabled background cursor
        const runMouseLeave = () => {
        CURSOR.style.display = "flex";     
        };

        DISABLEDHOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));

        // Disabled scaled background cursor
        const runMouseLeave2 = () => {
            CIRCLE.style.transform = '';  
        };

        BIGHOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave2));

    
    };
  document.addEventListener('mousemove', handleMousePos);


//Mouse circles
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
var range = 1.1 / 300;
var vw = range * Math.min(window.innerWidth, window.innerHeight);

document.documentElement.style.setProperty('--vw-scale', `${vw}`);

window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vw-scale', `${range * Math.min(window.innerWidth, window.innerHeight)}`);
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
            duration: 3.8, ease: "bounce.inOut",
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
            right: "-300%",
        });
        gsap.to(".introduction", {
            delay: 1,
            duration: 2, ease: "power2.out", x: 0,
            right: "0",
        });
        gsap.to(".loader", {
            delay: 1,
            opacity: 0,
            display: "none"
        });
    }
}, 20)

// DropDown Menu
const hamburgerContainer = document.querySelector('.dropDown');
const hamburger = document.querySelector('.dropDown__hamburger');
const closeDropDown = document.querySelector('.header__closeDropDown')
const crossDropDown = document.querySelector('.animated__closeDropDown');
const wrapper = document.querySelector('.header__wrapper');
const links = document.querySelectorAll('.animatedLinks');
const contact = document.querySelector('.header__right');
const home = document.querySelector('.home')
// const landing = document.querySelector('.landing')

hamburgerContainer.addEventListener('click', () => {
    hamburger.classList.add('active');
    closeDropDown.classList.add('active');
    crossDropDown.classList.remove('remove');
    wrapper.classList.add('active');
    wrapper.classList.remove('remove');
    home.classList.add('active');
    home.classList.remove('remove');
    // landing.style.zIndex = "99";
})

closeDropDown.addEventListener('click', () => {
    hamburger.classList.remove("active");
    closeDropDown.classList.remove('active');
    crossDropDown.classList.add('remove');
    wrapper.classList.add('remove');

    setTimeout(function() {
        home.classList.add('remove');
        // landing.style.zIndex = "0";
    }, 1000) 
})

home.addEventListener('click', () => {
    setTimeout(function() {
        home.classList.add('remove');
    }, 1000) 
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
.pauseFor(5500)
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
.typeString('<br> I\'m passionate about crafting <em><div class="animatedText bigHover"; data-text="interactive";><span>beautiful</span></div></em> & <em><div class="animatedText2 bigHover"; data-text="creative";><span>designed</span></div></em> websites.')
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

// GSAP Experiences Animation ScrollMagic
const bloc1 = document.querySelector('.bloc1');
const bloc2 = document.querySelector('.bloc2');
const bloc3 = document.querySelector('.bloc3');
const bloc4 = document.querySelector('.bloc4');
const experiencesTitle = document.querySelector('.experiences__title')

const tlexp = new TimelineMax();

tlexp
.from(bloc1, {y: 300, opacity: 0, duration: 0.5})
.from(bloc2, {y: 300, opacity: 0, duration: 0.5})
.from(bloc3, {y: 300, opacity: 0, duration: 0.5})
.from(bloc4, {y: 300, opacity: 0, duration: 0.5})

const controllerExp = new ScrollMagic.Controller();

const sceneExp = new ScrollMagic.Scene({
    triggerElement: experiencesTitle,
    reverse: false
})
.setTween(tlexp)
.addTo(controllerExp)


//GSAP Projects advice animation
const projectsAdvice = document.querySelector('.projects__advice');
const projectsTitle = document.querySelector('.projects__title__h2')

const tlprojects = new TimelineMax();

tlprojects
.from(projectsAdvice, {display: "none", opacity: 0, duration: 0.5})
.to(projectsAdvice, {display:"none", duration: 11.5})

const projectsController = new ScrollMagic.Controller();

const projectsScene = new ScrollMagic.Scene({
    triggerElement: projectsTitle,
    reverse: false,
})
.setTween(tlprojects)
.addTo(projectsController)


// Project slider image
const track = document.getElementById("image-track");

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


// PROJECT MODAL
const modal = document.querySelector('.modal');
const buttonContainer = document.querySelectorAll('.overlay-container');


buttonContainer.forEach(function (item) {
    item.addEventListener('click', function () {
        modal.style.display = "block";
    });
});


// GENERATE PROJECTS CONTENT
const modalContainer = document.querySelector('.modal')
import crossIconImg from '../images/cross-small.svg';

// We get the data from JSON folder
const data = require('./projectsData.json');
const projectsData = data.projectsData;

const projectsCards = document.querySelectorAll('.project-overlay');
projectsCards.forEach(project => project.addEventListener('click', (e) => {
    generatedProjects(e)
}))

import pictures from '../images/projects/*.webp'

function generatedProjects(e) {

    // Get the projects by data-id
    const projectId = e.target.dataset.id
    const projects = projectsData[projectId]
    
    // Get projects pictures imported because of parcel bundler
    const projectPictures = pictures[projectId];

    const modal = document.createElement('div');
    modal.className = 'modal__container';
    
    //Overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal__overlay';
    
    //Icon
    const crossIcon = document.createElement('img');
    crossIcon.className = 'modal-cross bigHover'
    crossIcon.src = crossIconImg;

    //Title & description container 
    const containerTitle = document.createElement('div')
    containerTitle.className = "containerTitle"
    
    //Title
    const title = document.createElement('h3');
    title.className = "modal__container__title bigHover"
    title.innerText = projects.title;
    
    //Container description image
    const descriptionImageContainer = document.createElement('div');
    descriptionImageContainer.className = 'description__image__container'
    
    //Description
    const description = document.createElement('p');
    description.className = "modal__container__description";
    description.innerText = projects.description;
        
    //image
    const imageContainer = document.createElement('div');
    imageContainer.className = "modal__container__image__container";
    const picture = document.createElement('img')
    picture.src = projectPictures
    
    //Button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'modal__container__button--container';
    const buttonLink = document.createElement('a');
    buttonLink.href = projects.link;
    buttonLink.target = '_blank';
    buttonLink.className = "githubLink  disabledHover"
    const button = document.createElement('i');
    button.className = 'fa-brands fa-github-alt githubIcon'
    const github = document.createElement("span")
    github.className = "githubButton"
    github.innerText = "Github"

    const buttonsGlobal = document.createElement('div')
    buttonsGlobal.className = "buttonsGlobal"

    //Overlay
    modalContainer.appendChild(modalOverlay)
    //Global Add
    modalContainer.appendChild(modal);
    //Icon
    modal.appendChild(crossIcon);
    //Title
    // modal.appendChild(title);
    //Description & image
    modal.appendChild(descriptionImageContainer)
    // descriptionImageContainer.appendChild(title)
    // descriptionImageContainer.appendChild(description)
    descriptionImageContainer.appendChild(containerTitle)
    containerTitle.appendChild(title)
    containerTitle.appendChild(description)
    descriptionImageContainer.appendChild(imageContainer);
    imageContainer.appendChild(picture);
    //Button
    modal.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonsGlobal);
    buttonsGlobal.appendChild(buttonLink);
    buttonLink.appendChild(button);
    buttonLink.appendChild(github)

    //Live button
    if(projects.live) {

        const liveButton = document.createElement('a');
        liveButton.className = "liveButton";
        liveButton.target = "_blank"
        liveButton.href = projects.live

        const liveContainer = document.createElement('div')
        liveContainer.className = 'liveContainer disabledHover' 
        liveContainer.innerText = "Watch Live"
        
        const liveIcon = document.createElement('span')
        liveIcon.className = "live-icon"

        buttonContainer.appendChild(buttonsGlobal)
        buttonsGlobal.appendChild(liveButton)
        liveButton.appendChild(liveContainer)
        liveContainer.appendChild(liveIcon)
    }

    //Tags
    const tags = document.createElement('div');
    tags.className = 'tags__container';

    for(let i = 0; i < projects.tags.length; i++) {

        const tagsLayout = document.createElement('div');
        tagsLayout.className = 'tags__container__layout';
        const tagsText = document.createElement('div')
        tagsText.className = 'tags__container__layout--tags tag1';
        tagsText.innerText = projects.tags[i];
            
        tags.appendChild(tagsLayout);
        tagsLayout.appendChild(tagsText);
    }
    buttonContainer.appendChild(tags);
    
    // When the user click anywhere outside the modal, or on the cross, close it
    const modalCross = document.querySelector('.modal-cross');
    const projectContainer = document.querySelector('.modal__overlay')
    window.addEventListener('click', function(event) {
    if (event.target === projectContainer || event.target === modalCross) {
        modalContainer.style.display = "none";
        modalContainer.innerHTML = "";
        }
        crossIcon.addEventListener('click', () => {
            const CIRCLE = document.querySelector('.circle');
                CIRCLE.style.transform = ''; 
        })
    })
}