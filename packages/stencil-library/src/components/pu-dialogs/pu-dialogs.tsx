import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-dialog',
  styleUrls: {
    md: 'pu-dialogs.md.scss'
  },
  shadow: true,
})
export class PuDialogs {
  render() {
    return (
      <Host>
        dialo
        <slot></slot>
      </Host>
    );
  }

}
