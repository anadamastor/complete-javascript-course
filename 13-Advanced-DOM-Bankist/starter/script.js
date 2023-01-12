'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // otherwise will move page on top
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// iterate through all of the butns to trigger the modal.
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ====================================================================
console.log('185. How the DOM Really Works');
// ====================================================================
// See notes for this.

// ====================================================================
console.log('186. Selecting, Creating, and Deleting Elements');
// ====================================================================

// SELECTING ELEMENTS
// ====================================================================
// select entire elements or all page
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// return a nodelist

document.getElementById('section--1');

// HTML collection is a live collection - will automatically update when some elements will update. A node list will not update itself.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// live HTML collection also returned by getElementsByClassName
document.getElementsByClassName('btn');

// CRATING AND INSERTING ELEMENTS
// ====================================================================

// .insertAdjacentHTML: quick and easy way to create elements
const h2 = document.querySelector('.header');
let html = '<p>My new paragraph.</p>';
h2.insertAdjacentHTML('afterend', html);

// .createElement creates a dom object saved in a variable. We need to manually insert it in the DOM.
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to imrpove functionalities and analyctis';
message.innerHTML =
  'We use cookies to imrpove functionalities and analyctis. <button class="btn--close-cookie"> Got it! </button>';

// now we need to insert this element somewhere in the header. Adds the element as the first child of this node.
// header.prepend(message);
// then we appended it and it is being moved at the end: a dom element is unique and it can only exist at one place at a time. What if I wanted more?
// header.append(message.);
// header.append(message.cloneNode(true));

// adds message a sibling element before/after header
header.before(message);
header.after(message);

// DELETING ELEMENTS
// ====================================================================
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// ====================================================================
console.log('187. Styles, Attributes and Classes');
// ====================================================================
// STYLES
// ====================================================================
// these are inline styles that will be saved directly in the DOM
message.style.backgroundColor = 'blue';
message.style.width = '120%';

console.log(message.style.height);
// height is a style hidden in the classe > returns nothing
console.log(message.style.backgroundColor);
// blue > this is an inline style and we can read it

// How to get inline styles (styles as appeare)
console.log(getComputedStyle(message).color);
//blue
console.log(getComputedStyle(message).height);
// 28.5

// changing a style by reading it first with getComputedStyle
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// change values in css prperties saved in file with setProperty
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
// ====================================================================
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
// Bankist logo

console.log(logo.src);

// not default attributes will not work (designer was created by me)
console.log(logo.designer);

//reading not conventional oattributes.
console.log(logo.getAttribute('designer'));

// you can also set attributes
logo.setAttribute('company', 'Bankist');

// absolute url for images:
console.log(logo.src);
// 127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/img/logo.png

//relative address
console.log(logo.getAttribute('src'));
// img/logo.png

// same goes with links
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
// http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/#
console.log(link.getAttribute('href'));
// #

// DATA ATTRIBUTE - special attribute. Dataset was saved in html ass data-version-number="3.0"
console.log(logo.dataset.versionNumber);
// 3.0

// CLASSES
// ====================================================================
logo.classList.add('c', 'second');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Do not use this -> will overwrite ecerything and only have one class
logo.className = 'jonas';

// ====================================================================
console.log('188. Implementing Smooth Scrolling');
// ====================================================================
// Smoothly scrolling to the next session
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // coords of the section 1
  // DOMRect {x: 0, y: 489, width: 862, height: 1681.1953125, top: 489, …}

  console.log(e.target.getBoundingClientRect());
  // x and y and other dimensions of the object. These changes according to the
  // visible viewport
  // DOMRect {x: 30, y: 142.21875, width: 112.4609375, height: 28.5, top: 142.21875, …}

  // in order to find the scrolling osition:
  console.log(('current scroll x/y', window.pageXOffset, window.pageYOffset));

  // scrolling
  // window.scrollTo(
  //   // current position + current scroll
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // smoothing the animation
  window.scrollTo({
    // current position + current scroll
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // modern way: only for modern browsers.
  section1.scrollIntoView({ behavior: 'smooth' });
});
// ====================================================================
console.log('189. Types of Events and Event Handlers');
// ====================================================================
// event: signal something has happened from a dom node (click, mouse moving)

// MOUSE ENTER - like mouse hover
const h1New = document.querySelector('h1');
const alertH1 = function (e) {
  alert('GREATE YOU ARE READING THE HEADING');

  // REMOVE LISTENER (need to save function)
  h1New.removeEventListener('mouseenter', alertH1);
};
h1New.addEventListener('mouseenter', alertH1);

// each event has an .onevent OLD SCHOOL LISTENING
// h1New.onmouseenter = function (e) {
//   alert('GREATE YOU ARE READING THE HEADING');
// };

// REMOVE EVENT LISTENER
setTimeout(() => h1New.removeEventListener('mouseenter', alertH1), 2000);

// ====================================================================
console.log('190. Event Propagation: Bubbling and Capturing');
// ====================================================================
// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // when this is triggered, bubbling triggers also the parent event
  // this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget); // target where event happened;

  // stop propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // because of event bubbling: the children element triggers also this one
  // this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('nav', e.target, e.currentTarget);
});

// Event handles functions are happening for events from users but also events that are bubbling from the children elements.
// Events are not handled in the capturing phase.
// ====================================================================
console.log('191. Event Propagation in Practice');
// ====================================================================
// only theory
// ====================================================================
console.log('192. Event Delegation: Implementing Page Navigation');
// ====================================================================
// PAGE NAVIGATION
// # in the link creates an anchor
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('LINK');
//     // id of element we want to scroll to
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
// this is too long: we use bubbling and event delegation.
// We add the listener within the common container, the parent element, wich catches the event. When user clicks in link it bubbles up and then we can catch the event.

//EVENT DELEGATION
// 1 - Event listener to common parent element
// 2 - determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // e..getAttribute('href').scrollIntoView({ behavior: 'smooth' });
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('link ok');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// ====================================================================
console.log('193. DOM Traversing');
// ====================================================================
const h1 = document.querySelector('h1');

// going downwards: selecting child
console.log(h1.querySelectorAll('.highlight')); // selects children of h1 elements
console.log(h1.childNodes); // nodes can be anything (every single node of every single type inside the parent)
// NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); //it's an array
// HTMLCollection(3) [span.highlight, br, span.highlight]

// editing the first or last element of html collection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// GOING UPWARDS - SELECTING PARENTS
console.log(h1.parentNode);
// div.header__title
console.log(h1.parentElement);
// div.header__title

// select closest parent element with the header class // IMPORTANT!!!
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// selecting the same
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// GOING SIDEWAYS: SIBLINGS
console.log(h1.previousElementSibling);
// null
console.log(h1.nextElementSibling);
// h4

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// getting all of the siblings in an HTML collection
console.log(h1.parentElement.children);
// this will scale everything else a part from h1 within the parent element
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

// ====================================================================
console.log('194. Building a Tabbed Component');
//====================================================================
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// too slow:
tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
tabsContainer.addEventListener('click', function (e) {
  // this finds the CLOSEST PARENT element with operations__tab key
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // GUARD CLAUSE: when nothing is clicked (outside of buttons)
  if (!clicked) return;

  // active tab
  // remove actibe button for the other ones
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // remove class of active tab (for all of them)
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active tab
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
// ====================================================================
console.log('195. Passing Arguments to Event Handlers');
// ====================================================================
// menu fade animation
const nav = document.querySelector('.nav');

//mouse enter does not bubble

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    // queryselector in this parent to search only within its children
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // select logo contained in nav from the link
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// passing argument into handler( which only have one, the classic e)
// handleHover now needs some paramenters.USING A FUNCTION THAT CALLS ANOTHER METHOD.
// The first argument passed to the bind() method is assigned to the 'this' keyword inside of the bound function
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// ====================================================================
console.log('196. Implementing a Sticky Navigation: The Scroll Event');
// ====================================================================
// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

// event fired off every time we scroll (NOT EFFICIENT scroll fires everytime)
window.addEventListener('scroll', function () {
  // We want nav sticky when reaching the first section (above const)
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// ====================================================================
console.log('197. A Better Way: The Intersection Observer API');
// ====================================================================
// Allows our code to observe changes to the way a certain element interesect another element or the way it instersect the viewport.

//Check when section intersects the viewport.

// these will go inside the IntObs
// This callback function will be called each time that the observed element (so our target) is intersecating the root element that we define in options.
const obsCallback = function (entries, observer) {
  // entries array of threshold array
  entries.forEach(entry => {
    // console.log(entry);
    // IntersectionObserverEntry {time: 25938.099999999627, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
  // The degree of intersection between the target element and its root is the intersection ratio. This is a representation of the percentage of the target element which is visible as a value between 0.0 and 1.0
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
// target or observed element
observer.observe(section1);

const headerToObserve = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // 90 pixel before the threshold is reached
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(headerToObserve);

// ====================================================================
console.log('198. Revealing Elements on Scroll');
// ====================================================================
// reveal section while they appear
// Sections are by default hidden and traslated in y now thanks to css

// REVEAL SECTION
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // stop observing
  observer.unobserve(entry.target);
};

const allSectionsObs = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSectionsObs.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// ====================================================================
console.log('199. Lazy Loading Images');
// ====================================================================
// STRATEGY TO OPTIMISE IMAGE LOADING
// LOW RES and blurred INITIAL IMAGE loaded by default and the original image is on data-src.

// LAZY LOADING

// behaviour of the intersected object (entries)
const loadHighResPic = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );
};

// Elements to lazy load and have the data-src class.
const allPics = document.querySelectorAll('img[data-src]');
console.log(allPics);

// IntersectionObserver loads function and visibility rules
const picObserver = new IntersectionObserver(loadHighResPic, {
  root: null, // entire viewport
  threshold: 0,
  rootMargin: '+200px',
});

// adds observer to the pics
allPics.forEach(function (pic) {
  picObserver.observe(pic);
});
// ====================================================================
console.log('200. Building a Slider Component: Part 1');
// ====================================================================

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  // 0% 100% 200% 300% each movements
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  // need this to stop at some point
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    // takes the slide and moves it
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    // works with the counter for the slide so you know where you are (next)
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // clicling right means we are moving the images by 100%
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // ====================================================================
  console.log('201. Building a Slider Component: Part 2');
  // ====================================================================
  // keys to move around the thing
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    // e.key === 'ArrowRight' && nextSlide(); // shortcirtuiting
    if (e.key === 'ArrowRight') nextSlide();
  });

  const dotContainer = document.querySelector('.dots');

  // creating dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // logis to slide and activate the right dot
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  // change color of dot when active
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    // selecting the approriate slide
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  //
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
};

slider();
// ====================================================================
console.log('202. Lifecycle DOM Events');
// ===================================================================
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built');
});

window.addEventListener('load', function (e) {
  console.log('page fully loaded', e);
});

// Just before user leaves
window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); //reqiured by some browsers
  console.log(e);
  e.returnValue = ''; // this will ask if you want to reload the page.
});

// ====================================================================
console.log('203. Efficient Script Loading: defer and async');
// ====================================================================
