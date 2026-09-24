import { test, expect } from '../fixtures/pom.fixture';

test.describe('CRUD_TEST', () => {
    test('Create_Task', async ({ pm, validUser, task1, task2, task3 }) => {
        await pm.login.goToLoginPage();
        await pm.login.login(validUser.email,  validUser.password);
        await pm.task.createTask(task1.title, task1.description, task1.priority);
        await pm.task.createTask(task2.title, task2.description, task2.priority);
        await pm.task.readTask(task1.title);
        await pm.task.readTask(task2.title);
    });
});

test.describe('CRUD_TEST', () => {
    test('Update_Task', async ({ pm, validUser, task2, task3 }) => {
        await pm.login.goToLoginPage();
        await pm.login.login(validUser.email,  validUser.password);
        await pm.task.updateTask(task2.title, task3.title, task3.description);
        
    });
});

test.describe('CRUD_TEST', () => {
    test('Delete_Task', async ({ pm, validUser, task1 }) => {
        await pm.login.goToLoginPage();
        await pm.login.login(validUser.email, validUser.password);
        await pm.task.deleteTask(task1.title); 
    });
});