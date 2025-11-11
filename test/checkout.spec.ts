import { test } from "@playwright/test";
import { CheckoutPage } from "../pages/checkout";
import { LoginPage } from "../pages/loginPage";

test.describe('test checkout page', () => {
  test('check visibulity', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const checkoutPage = new CheckoutPage(page);
    await loginPage.goto()
    await loginPage.login("standard_user", "secret_sauce");
    await checkoutPage.goto()
    await checkoutPage.CheckoutPageVisible()
    await checkoutPage.FillForm("ani","adu","se32")
    await checkoutPage.ClickButton()
    await checkoutPage.CheckNextPagevisibulity()
  });
  test('check error visibulity',async({page})=>{
    const loginPage = new LoginPage(page)
    const checkoutPage = new CheckoutPage(page);
    await loginPage.goto()
    await loginPage.login("standard_user", "secret_sauce");
    await checkoutPage.goto()
    await checkoutPage.CheckoutPageVisible()
    await checkoutPage.FillForm("ani","","se32")
    await checkoutPage.ClickButton()
    await checkoutPage.VerifyError()


  })
});