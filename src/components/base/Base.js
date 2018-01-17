import { Mesh, BoxBufferGeometry, MeshBasicMaterial } from "three";

export default class Base extends Mesh {
  constructor(view) {
    const geometry = new BoxBufferGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });

    super(geometry, material);
    this.view = view;
  }

  init() {
    this.view.scene.add(this);
  }

  update() {
    this.rotation.x += 0.01;
    this.rotation.y += 0.02;
  }
}
