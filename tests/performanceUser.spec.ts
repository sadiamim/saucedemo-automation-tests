import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test.describe('Performance User Flow', () => {

  test('Performance user login', async ({ page }) => {
    allure.feature('Login');
    allure.story('Performance User Login');
    allure.severity('normal');

    await allure.step('Open login page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await allure.step('Login as performance user', async () => {
      await page.fill('#user-name', 'performance_glitch_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
    });

    await allure.step('Verify inventory page loads', async () => {
      await expect(page).toHaveURL(/inventory/);
    });
  });

});
