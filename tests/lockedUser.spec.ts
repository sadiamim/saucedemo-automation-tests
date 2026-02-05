import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Locked out user should see error message', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/');
  await login.login('locked_out_user', 'secret_sauce');

  const error = await login.getErrorMessage();
  expect(error).toContain('locked out');
});
