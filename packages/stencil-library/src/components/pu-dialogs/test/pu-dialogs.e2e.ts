import { newE2EPage } from '@stencil/core/testing';

describe('pu-dialogs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-dialogs></pu-dialogs>');

    const element = await page.find('pu-dialogs');
    expect(element).toHaveClass('hydrated');
  });
});
