export default class HomePage {
  constructor(page) {
    this.page = page;
    this.registrationLink = page.getByRole('link', { name: 'Register' });
    this.profileLink = page.getByRole('link', { name: 'Profile' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
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
}