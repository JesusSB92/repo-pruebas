import { BasePage } from './BasePage';

export class TaskPage extends BasePage {

    async createTask(title: string, content: string) {
        await this.clickElement(this.page.getByRole('button', { name: 'New Task' }));
        await this.expectVisible(this.page.getByRole('dialog', { name: 'Create New Task' }));
    }

}