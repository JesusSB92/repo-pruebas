import { test as base } from '@playwright/test';
import PomManager from '../page/ManagePage';
import { invalidUser, validUser } from '../test-data/validUser.ts';
import { task1, task2, task3 } from '../test-data/task.ts';

type MyFixtures = {
  pm: PomManager;                       
  validUser: { email: string; password: string };
  invalidUser: { email: string; password: string };
  task1: { title: string; description: string; priority: string };
  task2: { title: string; description: string; priority: string };
  task3: { title: string; description: string };
};

export const test = base.extend<MyFixtures>({
  pm: async ({ page }, use) => {
    await use(new PomManager(page));
  },

   validUser,
   invalidUser,
   task1,
   task2,
   task3
   
});

export { expect } from '@playwright/test';