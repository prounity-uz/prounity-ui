import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-lists',
  styleUrl: 'pu-lists.scss',
  shadow: true,
})
export class PuLists {
  render() {
    return (
      <Host>
        <ul class={'pu-list'}>
          <li>
            <slot name="leading-icon">
              <pu-icon class={'leading-icon'}></pu-icon>
            </slot>
            <h1 class={'headline'}>
              <slot name="headline">Headline</slot>
            </h1>
            <div class={'tracking'}>
              <slot name="tracking"></slot>
            </div>
            <span class={'support-text'}>
              <slot name="support-text"></slot>
            </span>
          </li>
        </ul>
      </Host>
    );
  }
}
