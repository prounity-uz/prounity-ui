import { newSpecPage } from '@stencil/core/testing';
import { PuDialogs } from '../pu-dialogs';

describe('pu-dialogs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuDialogs],
      html: `<pu-dialogs></pu-dialogs>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-dialogs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-dialogs>
    `);
  });
});
