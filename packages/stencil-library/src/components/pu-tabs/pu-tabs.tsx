import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-tabs',
  styleUrls: {
    md: 'pu-tabs.md.scss'
  },
  shadow: true,
})
export class PuTabs {

  render() {
    return (
      <Host>
        <div class="pu-tabs">
          <div class="pu-tab">
            <div class="pu-tab-icon">
              <pu-icon>home</pu-icon>
            </div>
            <div class="pu-tab-label">
              Recomendaditions
            </div>
            <div class="pu-tab-indicator"></div>
          </div>
          <div class="pu-tab">
            <div class="pu-tab-icon">
              <pu-icon>home</pu-icon>
            </div>
            <div class="pu-tab-label">
              Trending
            </div>
            <div class="pu-tab-indicator"></div>
          </div>
          <div class="pu-tab">
            <div class="pu-tab-icon">
              <pu-icon>home</pu-icon>
            </div>
            <div class="pu-tab-label">
              Beauty
            </div>
            <div class="pu-tab-indicator"></div>
          </div>
          <div class="pu-tab">
            <div class="pu-tab-icon">
              <pu-icon>home</pu-icon>
            </div>
            <div class="pu-tab-label">
              Business
            </div>
            <div class="pu-tab-indicator"></div>
          </div>
        </div>
      </Host>
    );
  }

}
