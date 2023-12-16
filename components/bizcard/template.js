import { html } from "../../node_modules/lit-html/lit-html.js";
import {repeat } from "../../node_modules/lit-html/directives/repeat.js"

export default {
  // render HTMl 
  // ctx, props
  render(controller, props) {
     return html`
      <div class="logo-picker">Logo:
        <select @change="${(e) => { controller.updateGraphics()} }">
          ${repeat(
             props.logoChoices, // list 
            (i) => i.id,  // item index
            (i, index) => html`<option value="${i.uri}">${i.name}</option>`)}
      </select>
      </div>

      <div class="background-picker">Background:
        <select @change="${(e) => {controller.updateGraphics()} }">
          ${repeat(
            props.backgroundChoices,
            (i) => i.id, 
            (i, index) => html`<option value="${i.uri}">${i.name}</option>`)}
         </select>
      </div>
      <div class="biz-card">
      <div class="logo"></div>
      <div class="top-text">
        <h1>${props.first_name} ${props.last_name}</h1>
          <h3>${props.title}</h3>
      </div>

      <div class="bottom-text">
        <h3>phone: ${props.phone}</h3>
        <h3>${props.email} / ${props.website}</h3>
      </div>
    </div>
    ${this.html(props)}
    ${this.css(props)}`;
  },
  // HTML Option
  html(p) { return ``; },
  // CSS option
  css(p) { return ``; },
  // misc option
  options(list) {
    return ``;
  },
  // return the component Obj of the template
  mapDOM(scope) {
    return {
      logoPicker: scope.querySelector(
        '.logo-picker select'),
      backgroundPicker: scope.querySelector('.background-picker select'),
      logo: scope.querySelector('.logo'),
      background: scope.querySelector('.biz-card')
    }
  }

}