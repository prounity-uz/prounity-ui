import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-card',
  styleUrl: 'pu-card.scss',
  shadow: true,
})
export class PuCard {

  @Prop() type: 'filled' | 'outlined' | 'elevated' = 'elevated';

  render() {
    return (
      <Host class={`pu-card pu-card--${this.type}`}>
        <slot></slot>
      </Host>
    );
  }

}
