import {Given, When, Then} from '@cucumber/cucumber'
import registerPage from '../pageobjects/register.page';

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Then(/^I validate page header \"([^\"]*)\"$/, async function (headername:string) {
    await expect(registerPage.header).toHaveText(headername)
});

When(/^I input first name \"([^\"]*)\" and lastname \"([^\"]*)\"$/,  async function (fname:string, lname:string) {
    await (await registerPage.fname).setValue(fname)
    await (await registerPage.lname).setValue(lname)
});
  
When(/^I input email \"([^\"]*)\"$/,  async function (email:string) {
    await (await registerPage.email_input).setValue(email)
});

When(/^I select gender \"([^\"]*)\"$/,  async function (gender:string) {
    registerPage.selectElement(gender)
});

When(/^I input mobile phone number \"([^\"]*)\"$/,  async function (phone:string) {
    await (await registerPage.phone_input).setValue(phone)
});

When(/^I input date of birth \"([^\"]*)\"$/,  async function (dob:string) {
    const value = await registerPage.date_of_birth.getValue()
    console.log(value)
    
    for (let i = 0; i < value.length-1; i++) {
        await (await registerPage.date_of_birth).setValue("\uE003")
        await browser.pause(100)
    }

    await (await registerPage.date_of_birth).setValue(dob)
    browser.keys("\uE007"); 
});

When(/^I input subject \"([^\"]*)\"$/,  async function (subject_name:string) {
    await (await registerPage.subject_input).setValue(subject_name)
    browser.keys("\uE007"); 
});

When(/^I select hobbies \"([^\"]*)\"$/,  async function (hobbies:string) {
    registerPage.selectElement(hobbies)
});

When(/^I upload picture from directory \"([^\"]*)\"$/,  async function (filedir:string) {
    registerPage.uploadImage(filedir)
});

When(/^I input address \"([^\"]*)\"$/,  async function (address:string) {
    await (await registerPage.address_input).setValue(address)
    await browser.pause(1000)
});
