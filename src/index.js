import "@babel/polyfill";

import App from "Root/App";

document.addEventListener("DOMContentLoaded", () => {
  window.app = new App(document.querySelector("main"), {});
  app.init();
});
