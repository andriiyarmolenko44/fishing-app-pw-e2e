import { test, expect } from "../../fixtures/fixtures";
import ProfilePage from "../../page_objects/ProfilePage";
import HomePage from "../../page_objects/HomePage";

test.describe("Login", () => {
  test("Verify login with valid credentials(API)", async ({
    authenticatedAdminPage,
  }) => {
    const profilePage = new ProfilePage(authenticatedAdminPage);
    const homePage = new HomePage(authenticatedAdminPage);

    await authenticatedAdminPage.goto("/");
    await authenticatedAdminPage.reload();
    await homePage.clickProfileLink();

    await expect(profilePage.userDisplayName).toHaveText(
      `${process.env.ADMIN_NAME}`,
    );
    await expect(profilePage.userEmail).toHaveText(
      `${process.env.ADMIN_EMAIL}`,
    );
  });

  test("Verify user can logout", async ({ authenticatedAdminPage }) => {
    const profilePage = new ProfilePage(authenticatedAdminPage);
    const homePage = new HomePage(authenticatedAdminPage);

    await authenticatedAdminPage.goto("/");
    await authenticatedAdminPage.reload();
    await homePage.clickProfileLink();

    await expect(profilePage.userDisplayName).toHaveText(
      `${process.env.ADMIN_NAME}`,
    );
    await expect(profilePage.userEmail).toHaveText(
      `${process.env.ADMIN_EMAIL}`,
    );

    await homePage.clickLogoutButton();

    await expect(homePage.loginLink).toBeVisible();
  });
});
