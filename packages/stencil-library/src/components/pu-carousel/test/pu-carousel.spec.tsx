import { newSpecPage } from '@stencil/core/testing';
import { PuCarousel } from '../pu-carousel';

describe('pu-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuCarousel],
      html: `<pu-carousel></pu-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-carousel>
    `);
  });
});
