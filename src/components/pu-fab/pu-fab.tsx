import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-fab',
  styleUrl: 'pu-fab.scss',
  shadow: true,
})
export class PuFab {

  @Prop() type: 'small' | 'large'

  render() {
    return (
      <button class={`pu-fab pu-fab-${this.type}`}>
        <slot></slot>
      </button>
    );
  }

}
