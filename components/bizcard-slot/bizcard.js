import Template from './template.js';
import { render } from "../../node_modules/lit-html/lit-html.js";

class BizCard extends HTMLElement {

  connectedCallback() {
    // render using lit-html, first is html template, second is context
    this.root = this.attachShadow({mode: 'open'});
    // this.root = this.attachShadow({mode: 'closed'})


    this.root.innerHTML =`
    <div class="biz-card">
     <div class="logo"></div>
     <div class="top-text">
       <h1>
         <slot name="firstname">First</slot>
         <slot name="lastname">LastName</slot>
       </h1>
   
     <h3>
       <slot name="title">Job Title</slot>
     </h3>
     </div>
     <div class="bottom-text">
       <h3>phone:
         <slot name="phone">#xxx.xxx.xxxx</slot>
       </h3>
       <h3>
         <slot name="email">email@email.com</slot> /
         <slot name="website">http://website.com</slot>
       </h3>
     </div>
   </div>`;


    this.cardElement = document.createElement('div');

    this.templates = document.createElement('div');
    this.root.appendChild(this.cardElement);
    this.root.appendChild(this.templates);



  }

}

if (!customElements.get('biz-card')) {
  customElements.define('biz-card', BizCard);
}