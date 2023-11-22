import { newSpecPage } from '@stencil/core/testing';
import { PuSnackbar } from '../pu-snackbar';

describe('pu-snackbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuSnackbar],
      html: `<pu-snackbar></pu-snackbar>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-snackbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-snackbar>
    `);
  });
});
