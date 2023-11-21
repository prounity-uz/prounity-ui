import { newSpecPage } from '@stencil/core/testing';
import { PuLists } from '../pu-lists';

describe('pu-lists', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuLists],
      html: `<pu-lists></pu-lists>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-lists>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-lists>
    `);
  });
});
