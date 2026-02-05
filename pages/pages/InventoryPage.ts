import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addFirstItemToCart() {
    await this.page.locator('.inventory_item button').first().click();
  }

  async sortBy(option: string) {
    await this.page.selectOption('.product_sort_container', option);
  }

  async addItems(count: number) {
    const buttons = this.page.locator('.inventory_item button');
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

