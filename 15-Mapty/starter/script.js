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
      setMap(coords);
    },
    //GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1675786568060}
    function () {
      alert('couldnot get your position');
      //-0.1751407 51.5186359
    }
  );
}

// LEAFLET MAP
const setMap = function (coords) {
  console.log('HEYYY');

  const map = L.map('map').setView(coords, 20);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker(coords).addTo(map);

  map.on('click', function (e) {
    var latlng = map.mouseEventToLatLng(e.originalEvent);
    console.log(latlng.lat + ', ' + latlng.lng);
    const coords = [latlng.lat, latlng.lng];
    L.marker(coords).addTo(map);
  });
};
