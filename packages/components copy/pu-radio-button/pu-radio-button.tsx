import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-radio-button',
  styleUrl: 'pu-radio-button.scss',
  shadow: true,
})
export class PuRadioButton {
  @Prop() disabled: boolean = false;
  @Prop() checked: boolean = false;
  render() {
    return (
      <Host>
        <div class={`radio-button ${this.disabled && 'disabled'}`}>
          <div class="radio-button-box">
            <input class="radio-input" checked={this.checked} disabled={this.disabled} type={'radio'} />
            <pu-icon class="icon checked-icon">radio_button_checked</pu-icon>
            <pu-icon class="icon unchecked-icon">radio_button_unchecked</pu-icon>
          </div>
          <span class="radio-label">
            <slot ></slot>
          </span>
        </div>
      </Host>
    );
  }
}
