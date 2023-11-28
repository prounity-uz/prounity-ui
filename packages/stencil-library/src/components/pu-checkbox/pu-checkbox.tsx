import { Component, Host, h, Prop, State, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrls: {
    md: 'pu-checkbox.md.scss'
  },
  shadow: true,
})
export class PuCheckbox {

  @Prop({ reflect: true }) disabled = false;

  @State() checked: boolean = false;

  @State() icon: string = "done";

  @Listen('click', { capture: true })
  handleClick() {
    if (!this.disabled && !this.checked) {
      this.checked = !this.checked
    } else if (!this.disabled && this.checked && this.icon === "done") {
      this.icon = "remove"
    } else if (!this.disabled && this.checked && this.icon === "remove") {
      this.icon = "done"
      this.checked = !this.checked
    }
  }

  render() {
    return (
      <Host
        class={{
          "checked": this.checked && !this.disabled,
          "disabled": this.disabled
        }}
        onClick={this.handleClick}>
        <div
          class={{
            "icon": true,
            "icon-hidden": !this.checked && !this.disabled
          }}>
          <pu-icon
            aria-hidden={this.checked}
          >{this.icon}</pu-icon>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
