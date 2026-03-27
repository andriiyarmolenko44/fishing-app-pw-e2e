export default class LoginPage {
  constructor (page) {
    this.page = page;
    this.emailTextBox = page.getByRole('textbox', { name: 'Email' });
    this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async userLogin (email, password) {
    await this.emailTextBox.fill(email);
    await this.passwordTextBox.fill(password);
    await this.loginButton.click();
  }
}