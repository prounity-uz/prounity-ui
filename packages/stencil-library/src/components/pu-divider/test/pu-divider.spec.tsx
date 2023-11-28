import { newSpecPage } from '@stencil/core/testing';
import { PuDivider } from '../pu-divider';

describe('pu-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuDivider],
      html: `<pu-divider></pu-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-divider>
    `);
  });
});
