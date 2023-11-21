import { Component, Host, Prop, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.scss',
  shadow: true,
})
export class PuCheckbox {
  @State() private puIcon: string | null = null;
  @State() checkboxInput: HTMLInputElement;
  @State() private showPuIcon: boolean = false;
  @Prop() checked: boolean;
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
        <div class={`pu-checkbox ${this.hasError ? 'error' : ''}`}>
          <pu-icon style={{ display: this.showPuIcon ? 'block' : 'none' }}>check_box</pu-icon>
          <input
            ref={el => (this.checkboxInput = el)}
            disabled={this.disabled}
            class={`pu-checkbox-input`}
            type="checkbox"
            checked={this.checked}
            onClick={this.handleInputClick}
          />
        </div>
      </Host>
    );
  }
}
