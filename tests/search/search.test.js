import { test, expect } from "@playwright/test";

import HomePage from "../../page_objects/HomePage";
import LocationDetailsPage from "../../page_objects/LocationDetailsPage";

test.describe("search", () => {
  let homePage;
  let locationDetailsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    locationDetailsPage = new LocationDetailsPage(page);

    await page.goto("/");
  });

  test("should search by region", async () => {
    const region = "Kyiv";

    await homePage.searchByRegion(region);
    const data = await homePage.searchByFilters(region.toUpperCase());

    const firstLocationTitle = data.items[0].title;
    await homePage.openLocationCardByTitle(firstLocationTitle);

    await expect(locationDetailsPage.locationRegion).toContainText(region);
  });

  test("should search by water type", async () => {
    const water = "River";

    await homePage.searchByWaterType(water);
    const data = await homePage.searchByFilters(water.toUpperCase());

    const firstLocationTitle = data.items[0].title;
    await homePage.openLocationCardByTitle(firstLocationTitle);

    await expect(locationDetailsPage.locationWaterType).toContainText(water);
  });

  test("should search by fish", async () => {
    const fish = "Asp";

    await homePage.searchByFish(fish);
    const data = await homePage.searchByFilters(fish);

    const firstLocationTitle = data.items[0].title;
    await homePage.openLocationCardByTitle(firstLocationTitle);

    await expect(locationDetailsPage.getChipByText(fish)).toBeVisible();
  });

  test("should search by season", async () => {
    const season = "Spring";

    await homePage.searchBySeason(season);
    const data = await homePage.searchByFilters(season.toUpperCase());

    const firstLocationTitle = data.items[0].title;
    await homePage.openLocationCardByTitle(firstLocationTitle);

    await expect(locationDetailsPage.getChipByText(season)).toBeVisible();
  });
});