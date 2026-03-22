import { faker } from "@faker-js/faker";
import fs from "fs";

export default class OwnerPage {
  constructor (page) {
    this.page = page;
    this.createButton = page.getByRole('button', { name: 'Create' });
    this.titleTextBox = page.getByRole('textbox', { name: 'Title' });
    this.descriptionTextBox = page.getByRole('textbox', { name: 'Description' });
    this.regionTextBox = page.getByRole('textbox', { name: 'Region' });
    this.waterTypeComboBox = page.getByRole('combobox');
    this.photoInput = page.getByText('Drag and drop images here');
    this.mapContainer = page.locator('div').filter({ hasText: /^\+− Leaflet \| © OpenStreetMap contributors$/ }).nth(1);
  }
}