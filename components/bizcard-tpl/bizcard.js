

export default class BizCard extends HTMLElement {
  static get observedAttributes(){
    return ['layout']
  }

  attributeChangedCallback(name, oldVal, newVal){
    this.innerHTML = ''
    const tpl = document.getElementById(newVal)
    const clone = tpl.content.cloneNode(true)
    this.appendChild(clone)
  }
}

if(!customElements.get('biz-card')){
  customElements.define('biz-card',BizCard);
}