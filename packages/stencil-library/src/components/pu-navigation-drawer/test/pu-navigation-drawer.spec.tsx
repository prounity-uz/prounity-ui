import { newSpecPage } from '@stencil/core/testing';
import { PuNavigationDrawer } from '../pu-navigation-drawer';

describe('pu-navigation-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuNavigationDrawer],
      html: `<pu-navigation-drawer></pu-navigation-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-navigation-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-navigation-drawer>
    `);
  });
});
