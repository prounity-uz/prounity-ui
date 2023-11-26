import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-navigation-bar',
  styleUrls: {
    md: 'pu-navigation-bar.css'
  },
  shadow: true,
})
export class PuNavigationBar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}