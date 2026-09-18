import { test, expect } from '../fixtures/pom.fixture';

test.describe('Login', () => {
    test('should login successfully with valid credentials', async ({ pm, validUser }) => {
        await pm.login.goToLoginPage();
        await pm.login.login(validUser.user_email, validUser.password);
    });
});
