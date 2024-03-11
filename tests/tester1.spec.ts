import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 952,
    width: 1872
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
});