import {Page,expect} from '@playwright/test'

export class CheckoutPage {
    readonly page:Page;
    
    constructor(page:Page){
        this.page = page
    }

 async CheckoutPageVisible(){
    await expect(this.page.getByText("Checkout: Your Information")).toBeVisible()
 }
 async FillForm(firsName:string,lastName:string,Zip:any){
await this.page.fill('#first-name',firsName)
await this.page.fill('#last-name',lastName)
await this.page.fill('#postal-code',Zip )
 }
 async ClickButton(){
   await this.page.locator('#continue').click()
 }
async CheckNextPagevisibulity(){
   await expect(this.page.getByText('Checkout: Overview')).toBeVisible()

}
async VerifyError(){
   await expect(this.page.getByText('Error')).toBeVisible()
}

}