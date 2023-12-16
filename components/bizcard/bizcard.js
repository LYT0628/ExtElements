import Template from './template.js';
import { render } from "../../node_modules/lit-html/lit-html.js";

class BizCard extends HTMLElement {

  connectedCallback() {
    // render using lit-html, first is html template, second is context
    render(
      Template.render(this, {
        first_name: 'Emmett',
        last_name: 'Brown',
        title: 'Student of all Sciences',
        phone: '555-4385',
        email: 'emmett@docbrown.flux',
        website: 'www.docbrown.flux',
  
        logoChoices: [
          { name: 'mobius strip', uri: './img-1.jpg' },
          { name: 'shopping bag', uri: './images/bag-logo.png' },
          { name: 'copper splash', uri: './images/splash-logo.png' },
          { name: 'star', uri: './images/star-logo.png' },
          { name: 'cone', uri: './images/cone-logo.png' },
        ],
        backgroundChoices: [
          { name: 'big dots', uri: './img-2.jpg' },
          { name: 'little dots', uri: './images/tiny-dot-pattern.png' },
          { name: 'squares', uri: './images/square-pattern.png' },
          { name: 'stripes', uri: './images/stripes-pattern.png' },
          { name: 'diamond', uri: './images/diamond-pattern.png' },
        ],
  
      }), this
    );

    this.dom = Template.mapDOM(this);
    this.dom.backgroundPicker.addEventListener(
      'change', e => this.updateGraphics());
    this.dom.logoPicker.addEventListener(
      'change', e => this.updateGraphics());
    this.updateGraphics();
  }

  updateGraphics() {
    this.querySelector('.biz-card')
      .style.backgroundImage = `url("${this.querySelector('.background-picker select').value}")`;
    this.querySelector('.logo')
      .style.backgroundImage = `url("${this.querySelector('.logo-picker select').value}")`;
  }
}

if (!customElements.get('biz-card')) {
  customElements.define('biz-card', BizCard);
}