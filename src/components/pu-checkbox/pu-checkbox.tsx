import { Component, Host, Prop, h, State, Watch, Element } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.scss',
  shadow: true,
})
export class PuCheckbox {
  @State() private checkboxInput: HTMLInputElement;
  @State() private showPuIcon: boolean = false;
  @Prop() checked: boolean;
  @Prop() disabled: boolean = false;
  @Prop() hasError: boolean = false;

  @Watch('checked')
  handleCheckedChange() {
    this.showPuIcon = this.checked;
  }

  connectedCallback() {
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  private handleInputClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  render() {
    return (
      <Host>
        <div class={`pu-checkbox ${this.hasError ? 'error' : ''}`}>
          <pu-icon style={{ display: this.showPuIcon ? 'block' : 'none' }}>check</pu-icon>
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
