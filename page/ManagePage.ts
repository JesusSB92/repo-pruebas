import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { TaskPage } from './TaskPage';

export default class ManagePage {
    constructor(private readonly page: Page) { }

    private _login?: LoginPage;
    private _task?: TaskPage;

    get login(): LoginPage {
        if(!this._login) {
            this._login = new LoginPage(this.page);
        }

        return this._login;
    }

    get task(): TaskPage {
        return this._task ??= new TaskPage(this.page);
    }

}