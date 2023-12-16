import { html } from "../../node_modules/lit-html/lit-html.js";
import {repeat } from "../../node_modules/lit-html/directives/repeat.js"

export default {
  // render HTMl 
  // ctx, props
  render(controller, props) {
     return html`
     `;
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
      // logoPicker: scope.querySelector(
      //   '.logo-picker select'),
      // backgroundPicker: scope.querySelector('.background-picker select'),
      logo: scope.querySelector('.logo'),
      background: scope.querySelector('.biz-card')
    }
  }

}