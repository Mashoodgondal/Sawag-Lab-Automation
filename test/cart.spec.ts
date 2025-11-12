import { test } from "@playwright/test";


import { InventoryPage } from "../pages/inventory";
import { CartPage } from "../pages/cartPage";

test.describe("SauceDemo Cart Tests", () => {

  test("should add a product to cart and verify it", async ({ page }) => {
   
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    
    await page.goto('/inventory.html')
    await inventoryPage.verifyInventoryPageVisible();

    
    await inventoryPage.addProductToCart("Sauce Labs Backpack");

    
    const count = await inventoryPage.getCartBadgeCount();
    await test.expect(count).toBe(1);

    
    await inventoryPage.openCart();
    await cartPage.verifyCartPageVisible();
    await cartPage.verifyProductInCart("Sauce Labs Backpack");
  });

});
