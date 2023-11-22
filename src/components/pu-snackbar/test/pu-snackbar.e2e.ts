import { newE2EPage } from '@stencil/core/testing';

describe('pu-snackbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-snackbar></pu-snackbar>');

    const element = await page.find('pu-snackbar');
    expect(element).toHaveClass('hydrated');
  });
});
