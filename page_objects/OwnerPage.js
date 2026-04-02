export default class OwnerPage {
  constructor (page) {
    this.page = page;
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.titleTextBox = page.getByRole('textbox', { name: 'Title' });
    this.descriptionTextBox = page.getByRole('textbox', { name: 'Description' });
    this.regionTextBox = page.getByRole('textbox', { name: 'Region' });
    this.waterTypeComboBox = page.getByRole('combobox');
    this.addPhotosButton = page.getByRole('button', { name: 'Add photos' });
    this.mapContainer = page.locator('.leaflet-container');
    this.modalCreateButton = page.getByLabel('Create').getByRole('button', { name: 'Create' });
    this.firstLocationCard = page.locator('.location-card').first();
    this.createModal = page.getByRole('dialog', { name: 'Create' });
    this.uploadingText = page.getByText('Uploading...').first();
  }

  async createButtonClick () {
    await this.createButton.click();
  }

  async selectCoordinatesOnMap() {
    const box = await this.mapContainer.boundingBox();

    if (!box) {
      throw new Error("Map container is not visible")
    }

    await this.mapContainer.click({
      position: {
        x: box.width / 2,
        y: box.height / 2,
      },
    });
  }

  async uploadPhoto(filePath) {
    const fileChooserPromise = this.page.waitForEvent("filechooser");
    await this.addPhotosButton.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
  }

  async createLocation (title, description, region, waterType, photo) {
    await this.titleTextBox.fill(title);
    await this.descriptionTextBox.fill(description);
    await this.regionTextBox.click();
    await this.regionTextBox.fill(region);
    await this.page.getByText(region, { exact: true }).last().click();
    await this.waterTypeComboBox.selectOption(waterType);
    await this.selectCoordinatesOnMap();
    await this.uploadPhoto(photo);
  }

  async createButtonInModalClick () {
    await this.modalCreateButton.click();
  }

  async hideTestLocation () {
    await this.firstLocationCard.getByRole("button", { name: "Hide"}).click();
  }
}