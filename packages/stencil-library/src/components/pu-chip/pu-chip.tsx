import { Component, Prop, Host, h, State } from '@stencil/core';

@Component({
  tag: 'pu-chip',
  styleUrl: 'pu-chip.scss',
  shadow: true,
})
export class PuChip {

  @Prop() type: 'assist' | 'filter' | 'input' | 'suggestion' = 'assist';
  
  @Prop() disabled: boolean = false;

  @State() private select: boolean;

  selectToggle() {
    this.select = !this.select
    
  }

  render() {
    
    return (
      <Host>
        <div onClick={this.selectToggle} class={`pu-chip pu-chip--${this.type} ${this.select ? "selected" : ""} ${this.disabled ? "disabled": ""}`}>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        </div>
      </Host>
    );
  }

}
