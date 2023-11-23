import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-text',
  styleUrl: 'pu-text.scss',
  shadow: true,
})
export class PuText {

  @Prop() type: 
    'display-text' | 'display-text-large' | 'display-text-small' |
    'headline-text' | 'headline-text-large' | 'headline-text-small' |
    'title-text' | 'title-text-large' | 'title-text-small' |
    'body-text' | 'body-text-large' | 'body-text-small' |
    'label-text' | 'label-text-large' | 'label-text-small' = 'body-text';

  render() {
    return (
      <Host class={`pu-${this.type}`}>
        <slot></slot>
      </Host>
    );
  }

}
