@register @test1
Feature: Demo QA page

    Scenario Outline: Test practice form
        Given I am on practice page "https://demoqa.com/automation-practice-form"
        Then I validate page header "Student Registration Form"
        When I input first name "Aris" and lastname "Fatahillah"
        And I input email "aaa@gmail.com"
        And I select gender "Male"
        And I input mobile phone number "08213434343"
        And I input date of birth "6 Feb 2021"
        And I input subject "English"
        And I select hobbies "Sports"
        And I upload picture from directory "./support/onion.png"
        And I input address "jalan antapani"

