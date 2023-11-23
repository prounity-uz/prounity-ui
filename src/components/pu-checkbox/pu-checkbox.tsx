import { Component, Host, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.scss',
  shadow: true,
})
export class PuCheckbox {
  @State() private puIcon: string | null = null;
  @Prop() disabled: boolean = false;
  @Prop() hasError: boolean = false;

  connectedCallback() {
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  private updateIcon() {
    if (this.puIcon === null) {
      this.puIcon = 'check';
    } else if (this.puIcon === 'check') {
      this.puIcon = 'horizontal_rule';
    } else {
      this.puIcon = null;
    }
  }

  private handleInputClick() {
    if (!this.disabled) {
      this.updateIcon();
    }
  }

  render() {
    return (
      <Host>
        <div class={`pu-checkbox ${this.hasError ? 'error' : ''} ${this.disabled ? 'disabled' : ''}`}>
          {this.puIcon !== null && <pu-icon style={{ display: this.puIcon === 'check' || this.puIcon === 'horizontal_rule' ? 'block' : 'none' }}>{this.puIcon}</pu-icon>}
          <input disabled={this.disabled} class={`pu-checkbox-input`} type="checkbox" onClick={this.handleInputClick} />
        </div>
        <span class="label">
          {' '}
          <slot name="label"></slot>
        </span>
      </Host>
    );
  }
}
