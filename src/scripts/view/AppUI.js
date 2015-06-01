export default class AppUI {
  constructor() {
    this.initGUI();
    this.initStats();
  }

  initGUI() {
    this.gui = new dat.GUI();
    this.gui.close();
  }

  initStats() {
    this.stats = new Stats();
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';

    document.body.appendChild(this.stats.domElement);
  }
};
