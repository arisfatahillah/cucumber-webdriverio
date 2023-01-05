import {Given, When, Then} from '@cucumber/cucumber'

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl:string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Then(/^I validate page header \"([^\"]*)\"$/, async function (headername:string) {
    const header = await $('//h1')
    expect(await header).toHaveText(headername)
});

When(/^I enter firstname (.+) and lastname (.+)$/, async function (fname:string, lname:string) {
    const fname_input = $('[name=firstname]')
    const lname_input = $('[name=lastname]')

    await (await fname_input).setValue(fname)
    await (await lname_input).setValue(lname)
});

When(/^I select gender (.+) years experience (.+) and profession (.+)$/, async function (gender, yrs, profession) {
    const gender_radio = await $$('name=sex')
    const experience_radio = await $$('name=exp')
    const profession_cb = await $$('input[name=profession]')

    for (let i = 0; i < gender_radio.length; i++) {
        const element = await (gender_radio[i]).getAttribute('value');
        if (element === gender) {
            await(gender_radio[i]).click()
            break;
        }
    }

    for (let i = 0; i < experience_radio.length; i++) {
        const element = await (experience_radio[i]).getAttribute('value');
        if (element === gender) {
            await(experience_radio[i]).click()
            break;
        }
    }

    for (let i = 0; i < profession_cb.length; i++) {
        const element = await (profession_cb[i]).getAttribute('value');
        if (element === gender) {
            await(profession_cb[i]).click()
            break;
        }
    }


});

When(/^I select continent (.+) and commands (.+)$/, async function (continent, command) {
    const gender_radio = await $$('name=sex')
    const experience_radio = await $$('name=exp')
});

When(/^I click on submit button$/, function (callback) {
    
});