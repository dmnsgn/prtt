import 'babel-polyfill';

import './vendor/debouncedEvents.js';

import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App(document.getElementById('container'));
});
