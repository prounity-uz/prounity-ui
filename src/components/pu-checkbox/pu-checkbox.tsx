import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.scss',
  shadow: true,
})
export class PuCheckbox {
  @Prop() checked: boolean;
  @Prop() disabled: boolean;
  @Prop() hasError: boolean;

  render() {
    return (
      <Host>
        <slot>
          <div>
            <input class={{ 'pu-checkbox': true, 'error': this.hasError }} type="checkbox" />
          </div>
        </slot>
      </Host>
    );
  }
}
