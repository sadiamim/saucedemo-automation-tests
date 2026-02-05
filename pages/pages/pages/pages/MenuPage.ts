import { Page } from '@playwright/test';

export class MenuPage {
  constructor(private page: Page) {}

  async resetAppState() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('#reset_sidebar_link');
  }

  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('#logout_sidebar_link');
  }
}

