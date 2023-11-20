import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.scss',
  shadow: true,
})
export class PuCheckbox {
  @Prop() checked: boolean;
  @Prop() disabled: boolean = false;
  @Prop() hasError: boolean = false;

  render() {
    console.log(this.hasError);
    console.log('hello world');

    return (
      <Host>
        <slot>
          <input disabled={this.disabled} class={`pu-checkbox ${this.hasError ? 'error' : ''}`} type="checkbox" />
        </slot>
      </Host>
    );
  }
}
