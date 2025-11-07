import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
// import { inventory } from "../pages/inventory";
import { InventoryPage } from "../pages/inventory";
import { CartPage } from "../pages/cartPage";

test.describe("SauceDemo Cart Tests", () => {

  test("should add a product to cart and verify it", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Login
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await inventoryPage.verifyInventoryPageVisible();

    // Step 2: Add product to cart
    await inventoryPage.addProductToCart("Sauce Labs Backpack");

    // Step 3: Verify cart badge count updated
    const count = await inventoryPage.getCartBadgeCount();
    await test.expect(count).toBe(1);

    // Step 4: Open cart and verify product appears
    await inventoryPage.openCart();
    await cartPage.verifyCartPageVisible();
    await cartPage.verifyProductInCart("Sauce Labs Backpack");
  });

});
