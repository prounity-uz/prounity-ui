import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-bottom-app-bars',
  styleUrls: {
    md: 'pu-bottom-app-bars.md.scss'
  },
  shadow: true,
})
export class PuBottomAppBars {

  render() {
    return (
      <Host>
        <div class="app-bar-leading-icons">
          <pu-icon>circle</pu-icon>
          <pu-icon>change_history</pu-icon>
          <pu-icon>square</pu-icon>

          <pu-fab></pu-fab>
        </div>
      </Host>
    );
  }

}
