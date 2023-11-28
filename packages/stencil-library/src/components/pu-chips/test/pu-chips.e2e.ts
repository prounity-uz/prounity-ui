import { newE2EPage } from '@stencil/core/testing';

describe('pu-chips', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-chips></pu-chips>');

    const element = await page.find('pu-chips');
    expect(element).toHaveClass('hydrated');
  });
});
