
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { MenuPage } from '../pages/MenuPage';

test('Performance user sorted purchase flow', async ({ page }) => {
  await page.goto('/');

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const menu = new MenuPage(page);

  await login.login('performance_glitch_user', 'secret_sauce');
  await menu.resetAppState();

  await inventory.sortBy('za');
  await inventory.addFirstItemToCart();
  await inventory.goToCart();

  const names = await cart.getProductNames();
  expect(names.length).toBeGreaterThan(0);

  await cart.checkout();
  await checkout.fillInformation();
  await checkout.finishOrder();

  const message = await checkout.getSuccessMessage();
  expect(message).toBe('Thank you for your order!');

  await menu.resetAppState();
  await menu.logout();
});
