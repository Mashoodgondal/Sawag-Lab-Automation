import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventory";

test.describe("SauceDemo Login Tests", () => {

  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await inventoryPage.verifyInventoryPageVisible();
  });

  test("should show error with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("invalid_user", "wrong_pass");
    await loginPage.verifyLoginError();
  });

});




// test("should show error with invalid credentials", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login("invalid_user", "wrong_pass");
//   await loginPage.verifyLoginError();
// });
// test("should show error with invalid credentials", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login("invalid_user", "wrong_pass");
//   await loginPage.verifyLoginError();
// });