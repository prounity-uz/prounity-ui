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
        <slot>
          <input class="radio-button" disabled={this.disabled} type={'radio'} />
        </slot>
      </Host>
    );
  }
}