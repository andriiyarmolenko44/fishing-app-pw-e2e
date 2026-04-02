import { test, expect } from "../../fixtures/fixtures";
import { faker } from "@faker-js/faker";
import OwnerPage from "../../page_objects/OwnerPage";

test.describe("Owner creation", () => {
  test("Owner should create location", async ({authenticatedOwnerPage}) => {
    const ownerPage = new OwnerPage(authenticatedOwnerPage);
    const title = `test${faker.number.int({ min: 10, max: 100})}`;
    const description = title;
    const region = "Kyiv";
    const waterType = "Lake";
    const photo = "testData/fish.jpg";

    await authenticatedOwnerPage.goto("/owner");
    await ownerPage.createButtonClick();
    await ownerPage.createLocation(title, description, region, waterType, photo);

    await expect(ownerPage.uploadingText).toBeHidden();

    await ownerPage.createButtonInModalClick();

    await expect(ownerPage.createModal).toBeHidden();
    await expect(ownerPage.firstLocationCard).toContainText(title);

    await ownerPage.hideTestLocation();
  });
});