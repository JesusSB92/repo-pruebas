import { test, expect } from '../fixtures/pom.fixture';

test.describe('CRUD_TEST', () => {
    test('Create_Task', async ({ pm, validUser }) => {
        await pm.login.goToLoginPage();
        await pm.login.login(validUser.email,  validUser.password);
        await pm.task.createTask('Test Task', 'This is a test task');
    });
});
