import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-chip',
  styleUrl: 'pu-chip.scss',
  shadow: true,
})
export class PuChip {



  render() {
    return (
      <Host>
        <div class='pu-chip'>
            <slot></slot>
        </div>
      </Host>
    );
  }

}
