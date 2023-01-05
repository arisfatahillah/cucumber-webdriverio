import Page from '../pageobjects/page'

class RegisterPage extends Page {

    get header() { return  $('//h5'); }
    get fname() { return   $('[id=firstName]') }
    get lname() { return $('[id=lastName]') }
    get email_input() { return $('[id=userEmail]') }
    get phone_input() { return $('input[id=userNumber]') }
    get date_of_birth() { return $('input[id=dateOfBirthInput]') }
    get subject_input() { return $('input[id=subjectsInput]') }
    get upload_button() { return $('input[id=uploadPicture]') }
    get address_input() { return $('textarea[id=currentAddress]') }

    async selectElement(element_name: string) {
        const element = await $('//label[contains(text(),\'' + element_name + '\')]')
        console.log(element)
        await element.click()
    }

    async uploadImage(filepath: string) {
        const file_dir = await browser.uploadFile(filepath)
        await (await this.upload_button).setValue(file_dir)
    }

}
export default new RegisterPage()
