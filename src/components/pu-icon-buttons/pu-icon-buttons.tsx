import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-icon-buttons',
  styleUrl: 'pu-icon-buttons.scss',
  shadow: true,
})
export class PuIconButtons {

  @Prop() type: 'standart' | 'contained' = 'standart';
  @Prop() tooltip: string;

  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host>
        <button class='pu-icon-button' disabled={this.disabled}>
          <pu-icon>
            <slot></slot>
          </pu-icon>
        </button>
      </Host>
    );
  }

}
