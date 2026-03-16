export default class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
    this.displayNameTextbox = page.getByRole('textbox', { name: 'Display name' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password'}).nth(0);
    this.confirmPasswordTextbox = page.getByRole('textbox', { name: 'Confirm password' });
    this.termsCheckbox = page.getByRole('checkbox');
    this.createAccountButton = page.getByRole('button', { name: 'Create account' });
    this.uniqueFailedError = page.getByText('Unique constraint failed');
  }

  async userRegistration(email, displayName, password) {
    await this.emailTextbox.fill(email);
    await this.displayNameTextbox.fill(displayName);
    await this.passwordTextbox.fill(password);
    await this.confirmPasswordTextbox.fill(password);
    await this.termsCheckbox.click();
    await this.createAccountButton.click();
  }
}