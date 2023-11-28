import { newE2EPage } from '@stencil/core/testing';

describe('pu-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-carousel></pu-carousel>');

    const element = await page.find('pu-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
