import { newE2EPage } from '@stencil/core/testing';

describe('pu-navigation-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-navigation-drawer></pu-navigation-drawer>');

    const element = await page.find('pu-navigation-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
