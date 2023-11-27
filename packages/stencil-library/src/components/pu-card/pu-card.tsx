import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-card',
  styleUrls: {
    md: 'pu-card.md.scss'
  },
  shadow: true,
})
export class PuCard {

  render() {
    return (
      <Host>
        <div class="card-header">
          <div class="card-header-avatar"></div>
          <div class="card-header-content">
            <div class="card-header-title">
              Header
            </div>
            <div class="card-header-subtitle">
              Subhead
            </div>
          </div>
          <div class="card-header-img"></div>
        </div>

        <div class="card-image"></div>

        <div class="card-content">
          <div class="card-content-title">
            Title
          </div>
          <div class="card-content-subtitle">
            Subtitle
          </div>
          <div class="card-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.
          </div>
          <div class="card-content-actions">
            <pu-button>Enable</pu-button>
            <pu-button fill='filled'>Enable</pu-button>
          </div>
        </div>
      </Host>
    );
  }

}
