import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-fab',
  styleUrl: 'pu-fab.scss',
  shadow: true,
})
export class PuFab {

  @Prop() type: 'small' | 'large'

  @Prop() disabled: boolean = false;

  render() {
    return (
      <button class={`pu-fab pu-fab--${this.type}`} disabled={this.disabled}>
        <pu-icon>
          <slot></slot>
        </pu-icon>
      </button>
    );
  }

}
