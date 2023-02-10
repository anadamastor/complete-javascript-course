'use strict';

// CREATING CLASSES
class Workout {
  date = new Date();
  id = (Date.now + '').slice(2);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calPace();
    this._setDescription();
  }

  calPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling'; // this is is equal . this.type = cucling
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this._setDescription();
    this.calcSpeed();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 168);
// const cycling1 = new Cycling([39, -12], 27, 298, 168);
// console.log(run1, cycling1);

//////////
// application architecture
// Geolocation api to access the position

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // private instance attributes
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    // this is a form, enter key triggers a submit event
    // newWorkout is an event handler function. THIS KEYWORD is the same of the object to which it is attached._newWorkout will point to the form but we need it to point to this.
    form.addEventListener('submit', this._newWorkout.bind(this));

    // changing the input form in case of cycling
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _newWorkout(e) {
    // helper functions
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp >= 0);

    e.preventDefault();

    // GET DATA FROM FORM
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    console.log(this.#mapEvent.latlng);

    const { lat, lng } = this.#mapEvent.latlng;
    console.log(lat, lng);

    let workout;

    // IF RUNNING CREATE RUNNING OBJ
    if (type === 'running') {
      // CHECK IF DATA IS VALID
      const cadence = +inputCadence.value;
      // guard class: check if the opposite is false
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('inputs have to be positive numbers');
      console.log(lat, lng);

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // IF CUCLING, CEARTE CYCLING OBJ
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('inputs have to be positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // ADD NEW OBJECT TO WOTKOUT ARRAY
    this.#workouts.push(workout);

    //RENDER WORMOUT ON MAP
    this._renderWorkoutMarker(workout);
    // ADD NEW OBJECT TO WORKOUT ARRAY

    // RENDER WORKOUT ON MAP
    this._renderWorkout(workout);
  }

  _renderWorkout(workout) {
    // dom manipulation: creation of marjkup
    let html = `
        <li class="workout workout--${workout.type}"" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;
    if (workout.type === 'running') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    } else if (workout.type === 'cycling') {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    this._resetInputs();
    const newPopup = L.popup({
      autoClose: false,
      closeOnClick: null,
      opacity: 0.4,
      maxWidth: 250,
      minWidth: 100,
      className: `${workout.type}-popup`,
    }).setContent(`${workout.type}`);

    L.marker(workout.coords).addTo(this.#map).bindPopup(newPopup).openPopup();
  }

  _resetInputs = function () {
    // clear input fields
    inputCadence.valuee =
      inputDistance.value =
      inputCadence.value =
      inputElevation.value =
        '';
  };
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        // The  getCurrentPosition method passes the GeolocationPosition object to the callback. Read more about it at MDN. No need to run this._loadMap(poistion)
        this._loadMap.bind(this),
        function () {
          alert('couldnot get your position');
          //-0.1751407 51.5186359
        }
      );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 20);

    // DISPLAY MARKER
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    // show workout form on click
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    // saving the global variable to have the coords later
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    // selecting parent
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
}

// start application
const app = new App();
