import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-lists',
  styleUrl: 'pu-lists.scss',
  shadow: true,
})
export class PuLists {
  render() {
    return (
      <Host>
        <ul class={'pu-list'}>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
