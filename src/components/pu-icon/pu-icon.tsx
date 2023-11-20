import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-icon',
  styleUrl: 'pu-icon.scss',
  shadow: true,
})
export class PuIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
