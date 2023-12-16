
class CleanupComp extends HTMLElement{
  connectedCallback(){
    this.counter = 100;
    this.timer = setInterval(
      () => {this.update()},
      1000
    )
  }

  // called when component was removed from DOM
  disconnectedCallback(){
    clearInterval(this.timer)
  }
  update(){
    this.innerHTML = this.counter;
    this.counter --;
    console.log(this.counter);
  }
}

if(!customElements.get("ext-cleanup-component"))
customElements.define('ext-cleanup-component', CleanupComp);