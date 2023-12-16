class SampleComponent extends HTMLElement {

  connectedCallback() {
    const root =
    this.attachShadow({mode: 'open'});
    root.innerHTML = `
      <button class="big-button">-</button>
      <span class="increment-number">5</span>
      <button class="big-button">+</button>
      
      <style>
      /*host is the node holding she shadow tree*/
      :host {
        display: flex;
        }
      span {
      font-size: 24px;
      background-color: #770311;
      // color: white;
      font-family: Helvetica;
      display: inline-block;
      padding: 11px;
      border: none;
      }
      button {
      border-radius: 0 50px 50px 0;
      border: none;
      width: 50px;
      height: 50px;
      font-size: 36px;
      font-weight: bold;
      background: none;
      background-color: red;
      color: white;
      }
      button:first-child {
      border-radius: 50px 0 0 50px;
      }
      button:active {
      background-color: #960000;
      }
      button:focus {
      outline: thin dotted;
      }
      </style>`;
    }
  }

if (!customElements.get('sample-component')) {
  customElements.define('sample-component', SampleComponent);
}