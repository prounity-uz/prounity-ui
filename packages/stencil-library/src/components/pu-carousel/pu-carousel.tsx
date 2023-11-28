import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-carousel',
  styleUrls: {
    md: 'pu-carousel.md.scss'
  },
  shadow: true,
})
export class PuCarousel {
  @Prop() item: number;
  render() {
    return (
      <Host>
        <div class="carousel-item">
        </div>
        <div class="carousel-item">
        </div>
        <div class="carousel-item">
        </div>
        <slot></slot>
      </Host>
    );
  }

}
