import { newE2EPage } from '@stencil/core/testing';

describe('pu-navigation-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-navigation-bar></pu-navigation-bar>');

    const element = await page.find('pu-navigation-bar');
    expect(element).toHaveClass('hydrated');
  });
});
