import { newE2EPage } from '@stencil/core/testing';

describe('pu-ripple-effect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-ripple-effect></pu-ripple-effect>');

    const element = await page.find('pu-ripple-effect');
    expect(element).toHaveClass('hydrated');
  });
});
