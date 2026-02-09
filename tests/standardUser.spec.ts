import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe('Standard User Flow', () => {
  test('Standard user login test', async ({ page }) => {

    await allure.step('Open login page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await allure.step('Login as standard user', async () => {
      await page.fill('#user-name', 'standard_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
    });

    await allure.step('Verify inventory page', async () => {
      await expect(page).toHaveURL(/inventory/);
    });

  });
});

