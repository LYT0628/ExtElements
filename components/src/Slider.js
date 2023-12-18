// this refer to element itself

class Slider extends HTMLElement{

  // callback when element is mounted to DOM
  connectedCallback(){
    const bg = document.createElement('div')
    bg.classList.add('bg-overlay')
    const thumb = document.createElement('div')
    thumb.classList.add('thumb')
    this.appendChild(bg)
    this.appendChild(thumb)

    document.addEventListener('mousemove', e => this.eventHandle(e));
    document.addEventListener('mouseup', e => this.eventHandle(e));
    document.addEventListener('mousedown', e => this.eventHandle(e));
    
    // initial 
    this.setColor(this.bgColor)
    this.refresh(this.value)

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


  setColor(val){
    if(this.querySelector('.bg-overlay')){
      this.querySelector('.bg-overlay').style.background = 
      `linear-gradient(to right, ${val} 0%, ${val}00 100%)`
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

if(!customElements.get('ext-slider')){
  customElements.define('ext-slider', Slider);
}