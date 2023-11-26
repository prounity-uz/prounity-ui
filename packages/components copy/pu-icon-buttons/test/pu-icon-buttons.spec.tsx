import { newSpecPage } from '@stencil/core/testing';
import { PuIconButtons } from '../pu-icon-buttons';

describe('pu-icon-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuIconButtons],
      html: `<pu-icon-buttons></pu-icon-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-icon-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-icon-buttons>
    `);
  });
});
