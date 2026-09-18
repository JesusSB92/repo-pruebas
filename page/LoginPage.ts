import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    async goToLoginPage() {
        await this.goToUrl('/login');
    }

    async login(email: string, password: string) {
        await this.basePageFill(this.page.getByRole('textbox', { name: 'Email' }), email);
        await this.basePageFill(this.page.getByRole('textbox', { name: 'Password' }),  password);
        await this.basePageClick(this.page.getByRole('button', { name: 'Sign in' }));
        await this.basePageExpectVisible(this.page.getByRole('link', { name: 'Profile' }));
        await this.page.pause();
    }

    async login_fail(email: string, password: string) {
        await this.basePageFill(this.page.getByRole('textbox', { name: 'Email' }), email);
        await this.basePageFill(this.page.getByRole('textbox', { name: 'Password' }),  password);
        await this.basePageClick(this.page.getByRole('button', { name: 'Sign in' }));
        await this.basePageExpectVisible(this.page.getByTestId('login-error'));
        await this.page.pause();
    }
}