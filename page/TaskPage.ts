import { expect } from '../fixtures/pom.fixture';
import { BasePage } from './BasePage';

export class TaskPage extends BasePage {

    async createTask(title: string, description: string, value: string) {
        await this.clickElement(this.page.getByRole('button', { name: 'New Task' }));
        await this.expectVisible(this.page.getByRole('dialog', { name: 'Create New Task' }));
        await this.fillElement(this.page.getByRole('textbox', { name: 'Title' }), title);
        await this.fillElement(this.page.getByRole('textbox', { name: 'Description (optional)' }), description);
        await this.selectComboOption(this.page.getByTestId('task-priority-select'), value);
        await expect(this.page.getByTestId('task-priority-select')).toContainText(value);
        await this.clickElement(this.page.getByRole('button', { name: 'Create Task' }));
    }

    async readTask(title: string, description: string, priority: string ){
        const taskTitle = this.page.locator('[data-testid^="task-title-"]').filter({ hasText: title });

        await expect(taskTitle).toBeVisible();
        await expect(taskTitle).toHaveText(title);

        const testId = await taskTitle.getAttribute('data-testid');

        if (!testId) {
            throw new Error(`No se encontró el data-testid de la tarea: ${title}`);
        }

        const taskId = testId.replace('task-title-', '');

        const taskDescription = this.page.getByTestId(
            `task-description-${taskId}`
        );

        const taskPriority = this.page.getByTestId(
            `task-priority-${taskId}`
        );

        await expect(taskDescription).toHaveText(description);

        await expect(taskPriority).toHaveText(
            priority.toLowerCase()
        );
    }
}