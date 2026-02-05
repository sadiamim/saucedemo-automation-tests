
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { MenuPage } from '../pages/MenuPage';

test('Standard user complete purchase flow', async ({ page }) => {
  await page.goto('/');

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const menu = new MenuPage(page);

  await login.login('standard_user', 'secret_sauce');
  await menu.resetAppState();

  await inventory.addItems(3);
  await inventory.goToCart();

  await cart.checkout();
  await checkout.fillInformation();
  await checkout.finishOrder();

  const message = await checkout.getSuccessMessage();
  expect(message).toBe('Thank you for your order!');

  await menu.resetAppState();
  await menu.logout();
});

