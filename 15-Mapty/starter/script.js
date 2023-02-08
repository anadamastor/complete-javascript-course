'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;
// Geolocation api to access the position

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { longitude } = position.coords;
      const { latitude } = position.coords;
      console.log(longitude, latitude);
      console.log(
        `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
      );
      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 20);

      // DISPLAY MARKER
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // show workout form on click
      map.on('click', function (mapE) {
        // saving the global variable to have the coords later

        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },

    //GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1675786568060}
    function () {
      alert('couldnot get your position');
      //-0.1751407 51.5186359
    }
  );
}

// this is a form, enter key triggers a submit event
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // clear input fields
  resetInputs();

  const newPopup = L.popup({
    autoClose: false,
    closeOnClick: null,
    opacity: 0.4,
    maxWidth: 250,
    minWidth: 100,
    className: 'running-popup',
  }).setContent('Michi puzza');

  L.marker(mapEvent.latlng).addTo(map).bindPopup(newPopup).openPopup();
});

// changing the input form in case of cycling
inputType.addEventListener('change', function () {
  // selecting parent
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

const resetInputs = function () {
  // clear input fields
  inputCadence.valuee =
    inputDistance.value =
    inputCadence.value =
    inputElevation.value =
      '';
};
