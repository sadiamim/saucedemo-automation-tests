import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page.click('#checkout');
  }

  async getProductNames() {
    return this.page.locator('.inventory_item_name').allTextContents();
  }
}

