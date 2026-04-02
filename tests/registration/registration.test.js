import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

import HomePage from "../../page_objects/HomePage";
import RegistrationPage from "../../page_objects/RegistrationPage";
import ProfilePage from "../../page_objects/ProfilePage";

const emailThatExist = process.env.ADMIN_EMAIL;

test.describe("registration", () => {
  let homePage;
  let registrationPage;
  let profilePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    profilePage = new ProfilePage(page);

    await page.goto("/");
  });

  test("should register a new account", async () => {
    const userEmail = faker.internet.email().toLowerCase();
    const userDisplayName = faker.person.firstName();
    const userPassword = faker.internet.password({ length: 8 });

    await homePage.clickRegistrationLink();
    await registrationPage.userRegistration(
      userEmail,
      userDisplayName,
      userPassword,
    );

    await homePage.clickProfileLink();

    await expect(profilePage.userDisplayName).toHaveText(`${userDisplayName}`);
    await expect(profilePage.userEmail).toHaveText(`${userEmail}`);
  });

  test("should not register with existing email", async () => {
    const userDisplayName = faker.person.firstName();
    const userPassword = faker.internet.password({ length: 8 });

    await homePage.clickRegistrationLink();
    await registrationPage.userRegistration(
      emailThatExist,
      userDisplayName,
      userPassword,
    );

    await expect(registrationPage.uniqueFailedError).toBeVisible();
  })
});
