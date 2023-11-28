import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { createColorClasses } from '../../utils/theme';
import { Color } from '../../interface';

@Component({
  tag: 'pu-button',
  styleUrls: {
    md: 'button.md.scss'
  },
  shadow: true,
})
export class PuButton {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) color?: Color = 'primary';
  @Prop({ mutable: true }) buttonType = 'button';

  @Prop() fill?: 'filled' | 'filled-tonal' | 'outlined' | 'elevated' | 'dialog' | 'text' = 'elevated';

  @Prop({ reflect: true }) disabled = false;
  @Watch('disabled')
  disabledChanged() {
  }

  @Prop({ reflect: true }) expand?: 'full' | 'block';

  render() {
    // const mode = getIonMode(this);
    const {
      fill,
      color,
      disabled,
      buttonType,
      expand
    } = this;
    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        class={createColorClasses(color, {
          ['md']: true,
          [buttonType]: true,
          [`${buttonType}-${expand}`]: expand !== undefined,
          // [`${buttonType}-${finalSize}`]: finalSize !== undefined,
          // [`${buttonType}-${shape}`]: shape !== undefined,
          [`${buttonType}-${fill}`]: true,
          // [`${buttonType}-strong`]: strong,
          // 'in-toolbar': hostContext('ion-toolbar', this.el),
          // 'in-toolbar-color': hostContext('ion-toolbar[color]', this.el),
          // 'in-buttons': hostContext('ion-buttons', this.el),
          // 'button-has-icon-only': hasIconOnly,
          'button-disabled': disabled
        })}
      >
        <button class="pu-button" disabled={this.disabled}>
          <span class="pu-button-inner">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
          <pu-ripple-effect></pu-ripple-effect>
        </button>
      </Host>
    );
  }

}
