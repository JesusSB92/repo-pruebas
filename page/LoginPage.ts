import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    async goToLoginPage() {
        await this.goToUrl('/login');
    }

    async login(email: string, password: string) {
        await this.fillElement(this.page.getByRole('textbox', { name: 'Email' }), email);
        await this.fillElement(this.page.getByRole('textbox', { name: 'Password' }),  password);
        await this.clickElement(this.page.getByRole('button', { name: 'Sign in' }));
        await this.expectVisible(this.page.getByRole('link', { name: 'Profile' }));
    }

    async login_fail(email: string, password: string) {
        await this.fillElement(this.page.getByRole('textbox', { name: 'Email' }), email);
        await this.fillElement(this.page.getByRole('textbox', { name: 'Password' }),  password);
        await this.clickElement(this.page.getByRole('button', { name: 'Sign in' }));
        await this.expectVisible(this.page.getByTestId('login-error'));
    }
}