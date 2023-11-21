import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-radio-button',
  styleUrl: 'pu-radio-button.scss',
  shadow: true,
})
export class PuRadioButton {
  @Prop() disabled: boolean = false;
  render() {
    return (
      <Host>
        <div class="radio-button-box">
          <input class="radio-input" disabled={this.disabled} type={'radio'} />
          <pu-icon class="icon checked-icon">radio_button_checked</pu-icon>
          <pu-icon class="icon unchecked-icon">radio_button_unchecked</pu-icon>
        </div>
        <slot name="label"></slot>
      </Host>
    );
  }
}
