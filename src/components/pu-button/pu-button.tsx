import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-button',
  styleUrl: 'pu-button.scss',
  shadow: true,
})
export class PuButton {

  @Prop() type: 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'text' = 'elevated';

  @Prop() disabled: boolean;

  @Element() el: HTMLElement;

  render() {
    return (
      <button class={`pu-button pu-button--${this.type}`} disabled={this.disabled}>
        <span class="pu-button-inner">
          <slot name="start"></slot>
          <slot></slot>
          <slot name="end"></slot>
        </span>
        <pu-ripple-effect></pu-ripple-effect>
      </button>
    );
  }

}
