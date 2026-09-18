import { test as base } from '@playwright/test';
import PomManager from '../page/ManagePage';
import { validUser } from '../test-data/validUser.ts';

type MyFixtures = {
  pm: PomManager;                       
  validUser: { email: string; password: string };
};

export const test = base.extend<MyFixtures>({
  pm: async ({ page }, use) => {
    await use(new PomManager(page));
  },

   validUser,
});

export { expect } from '@playwright/test';