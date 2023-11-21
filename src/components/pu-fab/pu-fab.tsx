import { Component, h, Listen, Prop } from '@stencil/core';

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

  @Prop() addItems: object

  render() {
    return (
      <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <button class={`${this.type == 'add' ? 'pu-fab pu-fab--list-item' : 'pu-fab-item-none'}`}>
          <pu-icon>
            {this.icon}
          </pu-icon>
        </button>
        <button class={`${this.type == 'add' ? 'pu-fab pu-fab--list-item' : 'pu-fab-item-none'}`}>
          <pu-icon>
            {this.icon}
          </pu-icon>
        </button>
        <button class={`pu-fab pu-fab--${this.type} pu-${this.color}`} disabled={this.disabled}>
          <pu-icon>
            {this.icon}
          </pu-icon>
            <slot></slot>
        </button>
      </div>
    );
  }

}
