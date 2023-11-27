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
        <div class="pu-navigation-bar pu-navigation-bar-active">
          <div class="pu-navigation-bar-button">
            <pu-icon>home</pu-icon>
            <pu-badge>99</pu-badge>
          </div>
          <div class="pu-navigation-bar-label">
            Home
          </div>
        </div>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>favorite</pu-icon>
          </div>
          <div class="pu-navigation-bar-label">
            Favorite
          </div>
        </div>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>play_circle</pu-icon>
            <pu-badge></pu-badge>
          </div>
          <div class="pu-navigation-bar-label">
            Playing now
          </div>
        </div>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>download</pu-icon>
          </div>
          <div class="pu-navigation-bar-label">
            Downloads
          </div>
        </div>
        <div class="pu-navigation-bar">
          <div class="pu-navigation-bar-button">
            <pu-icon>account_circle</pu-icon>
          </div>
          <div class="pu-navigation-bar-label">
            Profile
          </div>
        </div>
      </Host>
    );
  }

}
