import Template from './template.js';

export default class Slider extends HTMLElement {
  connectedCallback() {

    this.innerHTML = Template.render();
    this.dom = Template.mapDOM(this);

    document.addEventListener('mousemove', e => this.eventHandle(e));
    document.addEventListener('mouseup', e => this.eventHandle(e));
    this.addEventListener('mousedown', e => this.eventHandle(e));

    this.refreshSlider(this.getAttribute('value'));
    this.setColor(this.getAttribute('backgroundcolor'));
  }

  setColor(color) {
    if (this.dom) {
      this.dom.overlay.style.background = `linear-gradient( to right, ${color} 0%, ${color}00 100%)`;
    }
  }

  refreshSlider(value) {
    if (this.dom) {
      this.dom.thumb.style.left = (value / 100 * this.offsetWidth -this.dom.thumb.offsetWidth / 2) + 'px';
    }
  }

  // return the custom properties, which you need to do something when they changed. 
  static get observedAttributes(){
    return ['value', 'bgColor']
  }

  // called when focused properties was changed.
  attributeChangedCallback(attr, oldVal, newVal){
    switch(attr){
      case 'value':
        this.refresh(newVal);
        break;
      case 'bgColor':
        this.setColor(newVal);
        break;
    }
  }

  refresh(val){
    if(this.querySelector('.thumb')){
      this.querySelector('.thumb').style.left = 
      (val/100 * this.offsetWidth - this.querySelector('.thumb').offsetWidth/2) + 'px';
    }
  }

  // x is length between thumb`s origin x and  slider`s origin x 
  updateX(x){
    // horizontal position of X
    let hpox = x - this.querySelector('.thumb').offsetWidth/2;

    // top right
    if(hpox > this.offsetWidth){
      hpox = this.offsetWidth;
    }
    // too left 
    if(hpox < 0 ){
      hpox = 0
    }
    // 
    this.value = (hpox / this.offsetWidth) * 100;
  }



  eventHandle(e){
    // rectangle 
    const bounds = this.getBoundingClientRect();

    // x is length between thumb`s origin x and  slider`s origin x 
    const x = e.clientX - bounds.left;

    switch(e.type){
      case 'mousedown':
        this.isDragging = true;
        this.updateX(x);
        this.refresh(this.value);
        break;
      case 'mouseup':
        this.isDragging = false;
        break;
      case 'mousemove':
        if(this.isDragging){
          this.updateX(x);
          this.refresh(this.value);
        }
    }
  }

// access method
  set value(val){
    this.setAttribute('value', val);
  }

  get value(){
    return this.getAttribute('value');
  }

  set bgColor(val){
    this.setAttribute('bgColor', val);
  }
  get bgColor(){
    return this.getAttribute('bgColor');
  }

  

}

if (!customElements.get('wcia-slider')) {
customElements.define('wcia-slider', Slider);
}