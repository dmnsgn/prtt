import "babel-polyfill";

import "Root/vendor/debouncedEvents";

import App from "Root/App";

document.addEventListener("DOMContentLoaded", () => {
  window.app = new App(document.querySelector("main"), {});
});
