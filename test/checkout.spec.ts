import { test } from "@playwright/test";
import { CheckoutPage } from "../pages/checkout";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventory";
import { CartPage } from "../pages/cartPage";
test.describe('test checkout page', () => {
  test('check visibulity', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const checkoutPage = new CheckoutPage(page);
    const inventoryPage = new InventoryPage(page)
    const cartPage= new CartPage(page)
    await loginPage.goto()
    await loginPage.login("standard_user", "secret_sauce");
  
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.openCart()
    await cartPage.goToCheckout()

    await checkoutPage.CheckoutPageVisible()
    await checkoutPage.FillForm("ani","adu","se32")
    await checkoutPage.ClickButton()
    await checkoutPage.CheckNextPagevisibulity()
  });
  test('check error visibulity',async({page})=>{
    const loginPage = new LoginPage(page)
    const checkoutPage = new CheckoutPage(page);
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    await loginPage.goto()
    await loginPage.login("standard_user", "secret_sauce");
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.openCart()
    await cartPage.goToCheckout()
    await checkoutPage.CheckoutPageVisible()
    await checkoutPage.FillForm("ani","","se32")
    await checkoutPage.ClickButton()
    await checkoutPage.VerifyError()

  })
});