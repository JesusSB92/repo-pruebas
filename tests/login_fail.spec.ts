import { test, expect } from '../fixtures/pom.fixture';

test.describe('Login_Test', () => {
    test('Login_fallido', async ({ pm, validUser }) => {
        await pm.login.goToLoginPage();
        await pm.login.login_fail(validUser.email, 'Prueba12345');
    });
});
