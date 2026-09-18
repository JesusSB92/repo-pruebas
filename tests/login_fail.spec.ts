import { test, expect } from '../fixtures/pom.fixture';

test.describe('Login_Test', () => {
    test('Login_fallido', async ({ pm, invalidUser }) => {
        await pm.login.goToLoginPage();
        await pm.login.login_fail(invalidUser.email,  invalidUser.password);
    });
});
