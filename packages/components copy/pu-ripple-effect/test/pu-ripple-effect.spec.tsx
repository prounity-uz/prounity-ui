import { newSpecPage } from '@stencil/core/testing';
import { PuRippleEffect } from '../pu-ripple-effect';

describe('pu-ripple-effect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuRippleEffect],
      html: `<pu-ripple-effect></pu-ripple-effect>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-ripple-effect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-ripple-effect>
    `);
  });
});
