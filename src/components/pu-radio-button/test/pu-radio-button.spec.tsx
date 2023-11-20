import { newSpecPage } from '@stencil/core/testing';
import { PuRadioButton } from '../pu-radio-button';

describe('pu-radio-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuRadioButton],
      html: `<pu-radio-button></pu-radio-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-radio-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-radio-button>
    `);
  });
});
