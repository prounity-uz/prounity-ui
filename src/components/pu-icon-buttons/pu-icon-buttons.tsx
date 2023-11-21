import { Component, Element, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-icon-buttons',
  styleUrl: 'pu-icon-buttons.scss',
  shadow: true,
})
export class PuIconButtons {

  @Element() el: HTMLElement;

  @Prop() type: 'standart' | 'contained' = 'standart';
  @Prop() tooltip: string;

  @Prop() disabled: boolean = false;

  @Listen('click', { capture: true })
  handleClick() {
    const button = this.el.shadowRoot.querySelector('button');
    button.classList.contains('pu-icon-button--active') ? button.classList.remove('pu-icon-button--active') : button.classList.add('pu-icon-button--active');
  }

  render() {
    return (
      <Host>
        <button class={`pu-icon-button`} disabled={this.disabled}>
          <pu-icon>
            <slot></slot>
          </pu-icon>
          {
            !this.disabled && <pu-ripple-effect></pu-ripple-effect>
          }
        </button>
      </Host>
    );
  }

}
