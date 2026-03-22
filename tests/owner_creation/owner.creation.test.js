import { test, expect } from "../../fixtures/fixtures";
import OwnerPage from "../../page_objects/OwnerPage";

test.describe("Owner creation", () => {
  test("Owner should create location", async ({authenticatedOwnerPage}) => {
    const ownerPage = new OwnerPage(authenticatedOwnerPage);

    await authenticatedOwnerPage.goto("/owner");
  });
});