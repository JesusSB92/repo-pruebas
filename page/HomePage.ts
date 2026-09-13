import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly menuLoginOption: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuLoginOption = page.getByRole('link', { name: 'Login', exact: true });
        this.loginButton = page.getByRole('link', { name: 'Start Practicing', exact: true });
    }

    async goToLoginFromMenu() {
        await this.menuLoginOption.click();
    }

    async goToLoginFromButton() {
        await this.loginButton.click();
    }
}