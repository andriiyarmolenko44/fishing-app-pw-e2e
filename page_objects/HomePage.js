export default class HomePage {
  constructor(page) {
    this.page = page;
    this.registrationLink = page.getByRole('link', { name: 'Register' });
    this.profileLink = page.getByRole('link', { name: 'Profile' });
  }

  async clickRegistrationLink() {
    await this.registrationLink.click();
  }

  async clickProfileLink() {
    await this.profileLink.click();
  }
}