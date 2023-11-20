import { Component, Host, Prop, h, State, Watch, Element } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.scss',
  shadow: true,
})
export class PuCheckbox {
  @State() private checkboxInput: HTMLInputElement;
  @State() private showPuIcon: boolean = false; // Новое состояние для отображения/скрытия pu-icon
  @Prop() checked: boolean;
  @Prop() disabled: boolean = false;
  @Prop() hasError: boolean = true;

  @Watch('checked')
  handleCheckedChange() {
    this.showPuIcon = this.checked; // Обновлено состояние showPuIcon при изменении checked
  }

  connectedCallback() {
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  componentDidLoad() {
    if (this.checkboxInput) {
      this.checkboxInput.addEventListener('change', this.handleCheckedChange);
    }
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
