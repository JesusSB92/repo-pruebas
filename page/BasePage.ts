import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) { }

  protected async goToUrl(path: string) {
    await this.page.goto(path);
  }

  protected async basePageClick(selector: string | Locator) {
    await this.toLocator(selector).click();
  }

  protected async basePageFill(selector: string | Locator, value: string) {
    await this.toLocator(selector).fill(value);
  }

  protected async basePageExpectVisible(selector: string | Locator) {
    await expect(this.toLocator(selector)).toBeVisible();
  }

  public locator(selector: string | Locator): Locator {
    return this.toLocator(selector);
  }

  protected toLocator(selector: string | Locator): Locator {
    return typeof selector === 'string'
      ? this.page.locator(selector)  
      : selector;                    
  }
}