import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-fab',
  styleUrl: 'pu-fab.scss',
  shadow: true,
})
export class PuFab {

  @Prop() type: 'small' | 'large' | 'elevated' | 'text' = 'elevated';

  @Prop() disabled: boolean = false;
  
  @Prop() color: 'surface' | 'primary' | 'secondary' | 'tertiary' | 'color' | 'text' = 'color';

  @Element() el: HTMLElement;

  render() {
    return (
      <button class={`pu-fab pu-fab--${this.type} pu-${this.color}`} disabled={this.disabled}>
        <pu-icon>
          <slot></slot>
        </pu-icon>
      </button>
    );
  }

}
