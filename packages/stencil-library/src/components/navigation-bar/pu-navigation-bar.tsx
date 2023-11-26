import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-navigation-bar',
  styleUrls: {
    md: 'pu-navigation-bar.scss'
  },
  shadow: true,
})
export class PuNavigationBar {

  render() {
    return (
      <Host>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>star</pu-icon>
          </div>
          <div class="pu-navigation-bar-label">
            Label
          </div>
        </div>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>explore</pu-icon>
          </div>
          <div class="pu-navigation-bar-label">
            Explore
          </div>
        </div>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>person</pu-icon>
          </div>
          <div class="pu-navigation-bar-label">
            Account
          </div>
        </div>
      </Host>
    );
  }

}
