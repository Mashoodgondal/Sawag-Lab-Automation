// import { Page, expect } from "@playwright/test";

// export class InventoryPage {
//   readonly page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async verifyInventoryPageVisible() {
//     await expect(this.page.getByText("Products")).toBeVisible();
//   }
// }







import { Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyInventoryPageVisible() {
    await expect(this.page.getByText("Products")).toBeVisible();
  }

  async addProductToCart(productName: string) {
    // Example productName: "Sauce Labs Backpack"
    await this.page.locator(`text=${productName}`).waitFor();
    const addButton = this.page.locator(`xpath=//div[text()="${productName}"]/../../..//button`);
    await addButton.click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async getCartBadgeCount() {
    const badge = this.page.locator('.shopping_cart_badge');
    if (await badge.isVisible()) {
      return parseInt(await badge.textContent() || "0");
    }
    return 0;
  }
}

