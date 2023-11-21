import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-chip',
  styleUrl: 'pu-chip.scss',
  shadow: true,
})
export class PuChip {

  @Prop() type: 'elevated';
  
  @Prop() disabled: boolean = false;

  render() {
    const toggleWithOutline = () => {
      const chip = document.querySelector('pu-chip');
      chip.classList.toggle('select');
      
    }
    return (
      <Host>
        <div onClick={toggleWithOutline} class={`pu-chip pu-chip--${this.type} ${this.disabled ? "disabled": ""}`}>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
        </div>
      </Host>
    );
  }

}
