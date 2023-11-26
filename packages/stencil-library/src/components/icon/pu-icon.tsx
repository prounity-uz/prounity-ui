import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-icon',
  styleUrl: 'pu-icon.scss',
  shadow: true,
})
export class PuIcon {

  @Prop() fill?: 'outlined' | 'filled' = 'filled';
  // @Prop() slot?: 'left' | 'right' = 'left';

  render() {
    return (
      <Host class={{
        [this.fill]: true,
        // [this.slot]: true,
      }}>
        <slot></slot>
      </Host>
    );
  }

}
