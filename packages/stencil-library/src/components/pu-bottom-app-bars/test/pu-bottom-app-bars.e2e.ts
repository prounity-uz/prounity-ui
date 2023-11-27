import { newE2EPage } from '@stencil/core/testing';

describe('pu-bottom-app-bars', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-bottom-app-bars></pu-bottom-app-bars>');

    const element = await page.find('pu-bottom-app-bars');
    expect(element).toHaveClass('hydrated');
  });
});
