export default class HomePage {
  constructor(page) {
    this.page = page;
    this.registrationLink = page.getByRole('link', { name: 'Register' });
    this.profileLink = page.getByRole('link', { name: 'Profile' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.regionInput = page.getByRole('textbox', { name: 'Region' });
    this.waterComboBox = page.locator('form').getByRole('combobox');
    this.fishTypeInput = page.getByRole('textbox', { name: 'Fish (type to search)' });
    this.seasonInput = page.getByRole('textbox', { name: 'Seasons (type to search)' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.locationCard = page.locator('div.location-card');
    this.loadingMessage = page.getByText('Loading...');
  }

  async clickRegistrationLink() {
    await this.registrationLink.click();
  }

  async clickProfileLink() {
    await this.profileLink.click();
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async searchByRegion (region) {
    await this.regionInput.click();
    await this.regionInput.fill(region);
    await this.page.getByText(region, { exact: true }).click();
  }

  async searchByWaterType (water) {
    await this.waterComboBox.selectOption(water);
  }

  async searchByFish (fish) {
    await this.fishTypeInput.click();
    await this.fishTypeInput.fill(fish);
    await this.page.getByText(fish, { exact: true }).click();
  }

  async searchBySeason (season) {
    await this.seasonInput.click();
    await this.seasonInput.fill(season);
    await this.page.getByText(season, { exact: true }).click();
  }

  async searchButtonClick () {
    await this.searchButton.click();
  }

  async openLocationCard (index = 0) {
    await this.locationCard.nth(index).click();
  }
}