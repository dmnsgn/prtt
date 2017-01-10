import 'babel-polyfill';

import './vendor/debouncedEvents';

import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App(document.querySelector('main'), {});
});
