export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  onMove(event) {
    console.log(window.event.screenX);
    const slider = document.querySelector('.slide');
    console.log(slider);

    const eixoX = getComputedStyle(slider);
    console.log(eixoX);

    eixoX.transform = `${window.event.screenX} 0px 0px`;
  }

  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
