import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-card',
  styleUrls: {
    md: 'pu-card.md.css'
  },
  shadow: true,
})
export class PuCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
