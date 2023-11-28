import { newE2EPage } from '@stencil/core/testing';

describe('pu-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-divider></pu-divider>');

    const element = await page.find('pu-divider');
    expect(element).toHaveClass('hydrated');
  });
});
