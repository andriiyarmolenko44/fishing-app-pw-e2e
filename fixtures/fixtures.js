import { test as base } from "@playwright/test";
import UserApi from "../api/user.api";

export const test = base.extend({
  authenticatedPage: async ({ page, request, context }, use) => {
    const userApi = new UserApi(request);

    const loginData = await userApi.login(
      process.env.ADMIN_EMAIL,
      process.env.ADMIN_PASSWORD,
    );

    await context.addInitScript((data) => {
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user", JSON.stringify(data.user));
    }, loginData);

    await use(page);
  },
});

export { expect } from "@playwright/test";
