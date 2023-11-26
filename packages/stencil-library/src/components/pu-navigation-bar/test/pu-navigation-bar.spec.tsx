import { newSpecPage } from '@stencil/core/testing';
import { PuNavigationBar } from '../pu-navigation-bar';

describe('pu-navigation-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuNavigationBar],
      html: `<pu-navigation-bar></pu-navigation-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-navigation-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-navigation-bar>
    `);
  });
});
