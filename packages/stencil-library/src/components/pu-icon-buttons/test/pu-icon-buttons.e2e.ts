import { newE2EPage } from '@stencil/core/testing';

describe('pu-icon-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-icon-buttons></pu-icon-buttons>');

    const element = await page.find('pu-icon-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
