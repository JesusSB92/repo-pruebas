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

    async readTask(title: string) {
        const taskCard = await this.getTaskCardByTitle(title);
        expect(taskCard).not.toBeNull();
        await this.expectVisible(taskCard);
    }
    

    async updateTask(title: string, newTitle: string, newDescription: string) {
        const taskCard = await this.getTaskCardByTitle(title);
        expect(taskCard).not.toBeNull();
        await this.expectVisible(taskCard);
        await this.clickElement(taskCard.locator('[data-testid^="task-menu-"]'));
        await this.clickElement(this.page.locator('[data-testid^="task-edit-"]'));
        await this.expectVisible(this.page.getByRole('textbox', { name: 'Title' }));
        await this.fillElement(this.page.getByRole('textbox', { name: 'Title' }), newTitle);
        await this.fillElement(this.page.getByRole('textbox', { name: 'Description (optional)' }), newDescription);
        await this.clickElement(this.page.getByRole('button', { name: 'Save Changes' }));
        const updatedTaskCard = await this.getTaskCardByTitle(newTitle);
        expect(updatedTaskCard).not.toBeNull();
        await this.expectVisible(updatedTaskCard);
    }
    
    async deleteTask(title: string) {
        const taskCard = await this.getTaskCardByTitle(title);
        expect(taskCard).not.toBeNull();
        await this.expectVisible(taskCard);
        await this.clickElement(taskCard.locator('[data-testid^="task-menu-"]'));
        await this.clickElement(this.page.locator('[data-testid^="task-delete-"]'));
        this.page.once('dialog', async dialog => {

            expect(dialog.type()).toBe('confirm');

            expect(dialog.message()).toBe(
            'Are you sure you want to delete this task?'
            );

            await dialog.accept();
        });
    }

    async getTaskCardByTitle(title: string){
        const taskTitle = this.filterHasTextElement(this.page.locator('[data-testid^="task-title-"]'), title);     
        const testId = await taskTitle.getAttribute('data-testid');

        if (!testId) {
            throw new Error(`No se encontró la tarea: ${title}`);
        }

        const taskId = testId.replace('task-title-', '');
        const taskCard = this.page.getByTestId(`task-card-${taskId}`);
        return taskCard;
    }
    
}