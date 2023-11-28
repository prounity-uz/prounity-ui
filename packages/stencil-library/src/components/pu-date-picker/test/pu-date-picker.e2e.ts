import { newE2EPage } from '@stencil/core/testing';

describe('pu-date-picker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-date-picker></pu-date-picker>');

    const element = await page.find('pu-date-picker');
    expect(element).toHaveClass('hydrated');
  });
});
