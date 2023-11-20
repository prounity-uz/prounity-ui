import { newE2EPage } from '@stencil/core/testing';

describe('pu-lists', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-lists></pu-lists>');

    const element = await page.find('pu-lists');
    expect(element).toHaveClass('hydrated');
  });
});
