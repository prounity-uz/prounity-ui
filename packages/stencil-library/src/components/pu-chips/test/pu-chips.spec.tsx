import { newSpecPage } from '@stencil/core/testing';
import { PuChips } from '../pu-chips';

describe('pu-chips', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuChips],
      html: `<pu-chips></pu-chips>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-chips>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-chips>
    `);
  });
});
