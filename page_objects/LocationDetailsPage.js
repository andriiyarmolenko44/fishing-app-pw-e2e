export default class LocationDetailsPage {
  constructor (page) {
    this.page = page;
    this.locationRegion = page.locator("strong.location-details-page__meta-value").first();
    this.locationWaterType = page.locator("strong.location-details-page__meta-value").last();
    this.descriptionChip = page.locator(".location-details-page__chip");
  }

  getChipByText (text) {
    return this.descriptionChip.filter({ hasText: text });
  }
}