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
        <input class="radio-button" disabled={this.disabled} type={'radio'} />
        <pu-icon class="icon">fiber_manual_record</pu-icon>
      </Host>
    );
  }
}
