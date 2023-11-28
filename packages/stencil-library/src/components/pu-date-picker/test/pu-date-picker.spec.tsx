import { newSpecPage } from '@stencil/core/testing';
import { PuDatePicker } from '../pu-date-picker';

describe('pu-date-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuDatePicker],
      html: `<pu-date-picker></pu-date-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-date-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-date-picker>
    `);
  });
});
