import { Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCartPageVisible() {
    await expect(this.page.getByText("Your Cart")).toBeVisible();
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.locator(`text=${productName}`)).toBeVisible();
  }

  async removeProduct(productName: string) {
    const removeButton = this.page.locator(`xpath=//div[text()="${productName}"]/../../..//button`);
    await removeButton.click();
  }
  async goToCheckout(){
    const button = this.page.locator('#checkout')
    await button.click()
  }
}