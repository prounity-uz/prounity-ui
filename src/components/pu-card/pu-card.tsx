import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-card',
  styleUrl: 'pu-card.scss',
  shadow: true,
})
export class PuCard {
  @Prop() type: 'filled' | 'outlined' | 'elevated' = 'elevated';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <div class={`pu-card pu-card--${this.type} ${this.disabled && 'disabled'}`}>
          <div class="headline">
            <slot name="title"></slot>
            <slot name="subtitle"></slot>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <pu-ripple-effect></pu-ripple-effect>
        </div>
      </Host>
    );
  }
}
