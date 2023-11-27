import { newSpecPage } from '@stencil/core/testing';
import { PuBottomAppBars } from '../pu-bottom-app-bars';

describe('pu-bottom-app-bars', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuBottomAppBars],
      html: `<pu-bottom-app-bars></pu-bottom-app-bars>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-bottom-app-bars>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-bottom-app-bars>
    `);
  });
});
