import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'pu-fab',
  styleUrl: 'pu-fab.scss',
  shadow: true,
})
export class PuFab {
  @Prop() icon: string;

  @Prop() type: 'small' | 'large' | 'elevated' | 'add' | 'text' = 'elevated';

  @Prop() disabled: boolean = false;
  
  @Prop() color: 'surface' | 'primary' | 'secondary' | 'tertiary' | 'color' | 'text' = 'color';

  @State() fabOpen: boolean = true;

  @State() fabListShow: boolean = true;

  fabClick(type) {
    if(type=='add'){
      this.fabOpen = !this.fabOpen
    } 
  }
  render() {
    return (
      <Host
      aria-hiden={this.fabOpen ? "false" : "true"}
      class={{
        "fab-list": true,
        "is-open": this.fabOpen
      }}
      style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <div class={"pu-fab--list"}>
          <button
          class={"pu-fab pu-fab--list-item"}
          aria-list-item={(this.fabOpen && this.type == "add") ? "show" : "hide"}>
            <pu-icon>
              {this.icon}
            </pu-icon>
          </button>
          <button
          class={"pu-fab pu-fab--list-item"}
          aria-list-item={(this.fabOpen && this.type == "add") ? "show" : "hide"}>
            <pu-icon>
              {this.icon}
            </pu-icon>
          </button>
          <button
          class={"pu-fab pu-fab--list-item"}
          aria-list-item={(this.fabOpen && this.type == "add") ? "show" : "hide"}>
            <pu-icon>
              {this.icon}
            </pu-icon>
          </button>
        </div>
        <button onClick={() => this.fabClick(this.type)} class={`pu-fab pu-fab--${this.type} pu-${this.color}`} disabled={this.disabled}>
          <pu-icon>
            {this.icon}
          </pu-icon>
            <slot></slot>
        </button>
        </Host>
    );
  }

}
