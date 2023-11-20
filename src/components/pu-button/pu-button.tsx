import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-button',
  styleUrl: 'pu-button.scss',
  shadow: true,
})
export class PuButton {

  @Prop() type: 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'text' = 'elevated';

  @Prop() disabled: boolean;

  render() {
    return (
      <button class={`pu-button pu-button--${this.type}`} disabled={this.disabled}>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
    );
  }

}
