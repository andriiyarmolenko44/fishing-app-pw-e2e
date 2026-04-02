export default class ProfilePage {
  constructor(page) {
    this.page = page;
    this.userDisplayName = page.locator(".profile-summary-name");
    this.userEmail = page.locator(".profile-summary-email");
  }
}
