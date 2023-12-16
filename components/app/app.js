import WebHarpStrings from '../strings/strings.js';

// container to webharp-strings
export default class WebHarpApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<webharp-strings strings="' + this.getAttribute('strings') + '"></webharp-strings>';
    this.stringsElement = this.querySelector('webharp-strings');
    this.addEventListener('mousemove',
                            e => this.onMouseMove(e));
  }

  // record location of mouse
  onMouseMove(event) {
    this.stringsElement.points = {
      last: this.lastPoint,
      current: { x: event.pageX, y: event.pageY } };
      // save last mouse point
      this.lastPoint = { x: event.pageX, y: event.pageY };
    }
}

if (!customElements.get('webharp-app')) {
customElements.define('webharp-app', WebHarpApp);
}