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
h1.closest('.header').style.background = 'var(--gradient-secondary)';
// selecting the same
h1.closest('h1').style.background = 'var(--gradient-primary)';

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
}),
  // ====================================================================
  console.log('194. Building a Tabbed Component');

// ====================================================================
console.log('195. Passing Arguments to Event Handlers');

// ====================================================================
console.log('196. Implementing a Sticky Navigation: The Scroll Event');

// ====================================================================
console.log('197. A Better Way: The Intersection Observer API');

// ====================================================================
console.log('198. Revealing Elements on Scroll');

// ====================================================================
console.log('199. Lazy Loading Images');

// ====================================================================

// ====================================================================
console.log('200. Building a Slider Component: Part 1');
// ====================================================================
console.log('201. Building a Slider Component: Part 2');

// ====================================================================
console.log('202. Lifecycle DOM Events');

// ====================================================================
console.log('203. Efficient Script Loading: defer and async');

// ====================================================================
