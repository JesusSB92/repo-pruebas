import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly copyEmailButton: Locator;
    readonly copyPasswordButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign in' });
        this.errorMessage = page.getByTestId('login-error');
        // Botones sin nombre accesible: se identifican por data-testid
        this.copyEmailButton = page.getByTestId('copy-email-button');
        this.copyPasswordButton = page.getByTestId('copy-password-button');
    }

    // Login escribiendo los valores directamente
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginWithCopyPaste() {
        await this.copyEmailButton.click();
        await this.emailInput.click();
        await this.emailInput.press('ControlOrMeta+V');

        await this.copyPasswordButton.click();
        await this.passwordInput.click();
        await this.passwordInput.press('ControlOrMeta+V');

        await this.loginButton.click();
    }

    async expectErrorMessage(text: string) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(text);
    }
}