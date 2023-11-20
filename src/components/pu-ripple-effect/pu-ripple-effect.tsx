import { Component, Element, Host, Listen, h } from '@stencil/core';

@Component({
  tag: 'pu-ripple-effect',
  styleUrl: 'pu-ripple-effect.scss',
  shadow: true,
})
export class PuRippleEffect {

  @Element() el: HTMLElement;

  @Listen('click', { capture: true })
  handleClick(event) {
    const puRippleElm = document.createElement('span');
    puRippleElm.classList.add('pu-ripple');
    const rect = this.el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    puRippleElm.style.top = `${y}px`;
    puRippleElm.style.left = `${x}px`;
    puRippleElm.style.width = `${rect.width}px`;
    puRippleElm.style.height = `${rect.height}px`;
    this.el.shadowRoot.appendChild(puRippleElm);
    setTimeout(() => {
      puRippleElm.remove();
    }, 500);
  }

  render() {
    return <Host></Host>
  }

}
