import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-divider',
  styleUrl: 'pu-divider.scss',
  shadow: true,
})
export class PuDivider {


  render() {
    return (
      <Host>
        <div class={`pu-divider`}>
        </div>
      </Host>
    );
  }

}
