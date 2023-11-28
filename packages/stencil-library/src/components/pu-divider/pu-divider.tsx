import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-divider',
  styleUrls: {
    md: 'pu-divider.md.scss'
  },
  shadow: true,
})
export class PuDivider {
  @Prop() type: "divider" | "subheader";
  @Prop() title: string;
  render() {
    return (
      <Host>
        <div class={"divider"}></div>
        <div class={{ "subheader": this.type === "subheader", "d-none": this.type !== "subheader" }}>
          <span>
            {this.title}
          </span>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
