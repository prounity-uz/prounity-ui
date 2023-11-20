import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-chip',
  styleUrl: 'pu-chip.scss',
  shadow: true,
})
export class PuChip {

  @Prop() type: 'elevated';
  
  @Prop() disabled: boolean = true;

  render() {
    return (
      <Host>
        <div class={`pu-chip pu-chip--${this.type} ${this.disabled ? "disabled": ""}`}>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        </div>
      </Host>
    );
  }

}
