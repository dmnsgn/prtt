import ControlKit from 'controlkit';

export default class AppUI {
  init() {
    this.initControls();
  }

  initControls() {
    const controlKit = new ControlKit();

    const panel = controlKit.addPanel({ label: 'Debug Panel', align: 'left' });
    panel.addGroup({ label: 'Controls' });
    panel.addButton('STUFF', () => { console.log('STUFF'); });
    panel.addButton('THING', () => { console.log('THING'); });
  }
}
