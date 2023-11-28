import { Component, Host, h, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'pu-chips',
  styleUrls: {
    md: 'pu-chips.md.scss'
  },
  shadow: true,
})
export class PuChips {
  @Prop() type: "label" | "trailing" | 'text' = 'label';
  @State() hide: boolean = false
  @Listen('click', { capture: true })
  handleClick() {
    this.hide = true;
  }
  render() {
    return (
      <Host aria-hidden={this.hide} >
        Label
        <pu-icon onClick={this.handleClick} class={{ "icon-trailing-none": this.type === "trailing" }}>close</pu-icon>
        <slot></slot>
      </Host>
    );
  }

}
