/* global dat */

export default class AppUI {
  init() {
    this.initGUI();
  }

  initGUI() {
    this.gui = new dat.GUI();
    this.gui.close();
  }
}
