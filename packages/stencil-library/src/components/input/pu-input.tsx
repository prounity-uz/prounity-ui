import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'pu-input',
  styleUrls: {
    md: 'pu-input.md.scss'
  },
  shadow: true,
})
export class PuInput {

  @State() hasFocus = false;
  @State() leadeingIcon: boolean;
  @State() trailingIcon: boolean;

  @Element() el!: HTMLElement;

  @Prop() disabled: boolean = false;
  @Prop() placeholder?: string;


  private onFocus = (ev: FocusEvent) => {
    console.log(ev);
    this.hasFocus = true;
    // this.focusedValue = this.value;
    // this.emitStyle();

    // this.ionFocus.emit(ev);
  };

  private onBlur = (ev: FocusEvent) => {
    console.log(ev);
    this.hasFocus = false;
    // this.emitStyle();

    // if (this.focusedValue !== this.value) {
    //   /**
    //    * Emits the `ionChange` event when the input value
    //    * is different than the value when the input was focused.
    //    */
    //   this.emitValueChange(ev);
    // }

    // this.didInputClearOnEdit = false;

    // this.ionBlur.emit(ev);
  }

  private onChange() {
    // console.log('onChange', this.isFocused);
  }

  componentWillLoad() {
    const leadingIcon = this.el.querySelector('[slot="start"]');
    const trailingIcon = this.el.querySelector('[slot="end"]');
    this.leadeingIcon = leadingIcon !== null;
    this.trailingIcon = trailingIcon !== null;
    console.log('leadingIcon', this.el, leadingIcon === null)
    console.log('trailingIcon', trailingIcon)
    // console.log('componentWillLoad');
  }

  render() {
    return (
      <Host>
        <label class={{
          'input-wrapper': true,
          'disabled': this.disabled,
          'has-leading-icon': !!this.leadeingIcon,
          'has-trailing-icon': !!this.trailingIcon,
          'focused': this.hasFocus
        }}>
          <slot name='start'></slot>
          <div class="native-wrapper">
            <div class="label-text">Label</div>
            <input 
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.onChange}
              disabled={this.disabled}
              type="text"
              placeholder={this.placeholder || ''}
            />
          </div>
          <slot name='end'></slot>
          <div class="active-indicator"></div>
        </label>
        <div class="supporting-text">Supporting text</div>
      </Host>
    );
  }

}
