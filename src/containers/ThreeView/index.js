import { Scene, PerspectiveCamera, WebGLRenderer } from "three";

import Base from "Components/base/Base";

import w, { BindEvent } from "Utils/window";

export default class ThreeView {
  constructor(element, options) {
    this.element = element;
    this.options = options;
  }

  init() {
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(75, w.width / w.height, 0.01, 1000);
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    this.renderer = new WebGLRenderer({
      antialias: true
    });
    this.renderer.setClearColor(0x000000);
    this.renderer.setPixelRatio(w.devicePixelRatio);

    this.element.appendChild(this.renderer.domElement);

    this.base = new Base(this);
    this.base.init();

    this.onResize();
  }

  render(dt) {
    this.base.update();
    this.renderer.render(this.scene, this.camera);
  }

  @BindEvent("resize")
  onResize() {
    this.camera.aspect = w.width / w.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w.width, w.height);
  }
}
