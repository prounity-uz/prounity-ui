import { newE2EPage } from '@stencil/core/testing';

describe('pu-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-radio-button></pu-radio-button>');

    const element = await page.find('pu-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
