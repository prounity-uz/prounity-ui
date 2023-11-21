import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-icon',
  styleUrl: 'pu-icon.scss',
  shadow: true,
})
export class PuIcon {

  @Prop() type: 'filled' | 'outlined' = 'outlined';

  render() {
    return (
      <Host class={`pu-icon-${this.type}`}>
        <slot></slot>
      </Host>
    );
  }

}
