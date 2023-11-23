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
            <div class={'list-item-div'}>
              <div class={'list-content'}>
                {/* <div class={'leading-avatar'}>
                  <slot name="leading-avatar">
                    <img src="" alt="" />
                  </slot>
                  <span class={'leading-avatar-label'}>
                    <slot name="leading-avatar-label"></slot>
                  </span>
                </div> */}

                {/* <div class={'leading-image'}>
                  <slot name="leading-image">
                    <img src="" alt="" />
                  </slot>
                </div> */}

                <pu-icon class={'leading-icon'}>
                  <slot name="leading-icon"></slot>
                </pu-icon>
                <div>
                  <pu-text type="headline-text">
                    <slot name="headline"></slot>
                  </pu-text>
                  <pu-text type="body-text-small" class={'support-text'}>
                    <slot name="support-text"></slot>
                  </pu-text>
                </div>
              </div>

              <div class={'tracking'}>
                <slot name="tracking"></slot>
              </div>
            </div>
            {/* <div class={'divider'}>
              <slot name="divider"></slot>
            </div> */}
          </li>
        </ul>
      </Host>
    );
  }
}
