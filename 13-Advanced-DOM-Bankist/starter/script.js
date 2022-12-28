'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
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

// ====================================================================
console.log('186. Selecting, Creating, and Deleting Elements');
// ====================================================================
console.log('187. Styles, Attributes and Classes');

// ====================================================================
console.log('188. Implementing Smooth Scrolling');
// ====================================================================
console.log('189. Types of Events and Event Handlers');

// ====================================================================
console.log('190. Event Propagation: Bubbling and Capturing');

// ====================================================================
console.log('191. Event Propagation in Practice');
// ====================================================================
console.log('192. Event Delegation: Implementing Page Navigation');

// ====================================================================
console.log('193. DOM Traversing');

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
console.log('00. Building a Slider Component: Part 1');
// ====================================================================
console.log('1. Building a Slider Component: Part 2');

// ====================================================================
console.log('202. Lifecycle DOM Events');

// ====================================================================
console.log('203. Efficient Script Loading: defer and async');

// ====================================================================
