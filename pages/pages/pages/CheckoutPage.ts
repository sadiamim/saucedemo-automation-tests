import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInformation() {
    await this.page.fill('#first-name', 'Test');
    await this.page.fill('#last-name', 'User');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
  }

  async getSuccessMessage() {
    return this.page.locator('.complete-header').textContent();
  }
}

