export default class UserApi {
  constructor(request) {
    this.request = request;
    this.apiUrl = process.env.API_URL;
  }

  async login(email, password) {
    const response = await this.request.post(`${this.apiUrl}auth/login`, {
      data: { email: email, password: password },
    });

    const bodyText = await response.text();
    return JSON.parse(bodyText);
  }
}
