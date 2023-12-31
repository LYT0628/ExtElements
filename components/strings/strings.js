import WebHarpString from '../string/string.js';


 class WebHarpStrings extends HTMLElement {

  connectedCallback() {
    // for left space
    let strings = '<div class="spacer"></div>';

    for (let c = 0; c < this.getAttribute('strings'); c++) {
      strings +=`<webharp-string></webharp-string>`; 
    }

      this.innerHTML = strings;
      this.stringsElements =this.querySelectorAll('webharp-string');
  }


  set points(pts) {
    if (!this.stringsElements) { return; }
    if (!pts.last || !pts.current) { return; }

  
    let magnitude = Math.abs(pts.current.x - pts.last.x);

    let xMin =Math.min(pts.current.x, pts.last.x);
    let xMax = Math.max(pts.current.x, pts.last.x);

    for (let d = 0;d < this.stringsElements.length; d++) {
        if (xMin <= this.stringsElements[d].offsetLeft && 
            xMax >=this.stringsElements[d].offsetLeft) {
              let strum = {
                power: magnitude,        
                string: d
              };
        this.stringsElements[d].strum(strum);
      }
    }
  }

  
}
if (!customElements.get('webharp-strings')) {
  customElements.define('webharp-strings', WebHarpStrings);
  }

  export default WebHarpStrings