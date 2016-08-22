import 'babel-polyfill';

import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App(document.getElementById('container'));
});
