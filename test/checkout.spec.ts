import { test } from "@playwright/test";
import { CheckoutPage } from "../pages/checkout";

import { InventoryPage } from "../pages/inventory";
import { CartPage } from "../pages/cartPage";
test.describe('test checkout page', () => {
  let inventoryPage:InventoryPage
  let checkoutPage:CheckoutPage
  let cartPage: CartPage

test.beforeEach('run before every test',async({page})=>{       
        checkoutPage= new CheckoutPage(page)
        inventoryPage = new InventoryPage(page)
        cartPage = new CartPage(page)
        await page.goto('/inventory.html');
        await inventoryPage.verifyInventoryPageVisible()
        await inventoryPage.addProductToCart("Sauce Labs Onesie")
        await inventoryPage.openCart()
        await cartPage.goToCheckout()
})
  test('check visibulity', async ({ page }) => {
   
    await checkoutPage.FillForm("ani","adu","se32")
    await checkoutPage.ClickButton()
    await checkoutPage.CheckNextPagevisibulity()
  });
  test('check error visibulity',async({page})=>{
    
    await checkoutPage.FillForm("ani","","se32")
    await checkoutPage.ClickButton()
    await checkoutPage.VerifyError()

  })
});








// test('check error visibulity',async({page})=>{
    
//   await checkoutPage.FillForm("ani","","se32")
//   await checkoutPage.ClickButton()
//   await checkoutPage.VerifyError()

// })