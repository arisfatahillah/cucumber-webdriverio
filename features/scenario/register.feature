@register @test1
Feature: Chai page

    Scenario Outline: Test practice form
        Given I am on practice page "https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm"
        Then I validate page header "Selenium - Automation Practice Form"
        When I enter firstname <fname> and lastname <lname>
        And I select gender <gender> years <yrs> favorite chai <favchai> and reason <reason>
        And I select continent <continent> and commands <command>
        And I click on submit button
        Then I validat page header "We're passionate about tea."
        
        Examples:
            | fname | lname  | gender | yrs | profession | selenium             | continent | command       |
            | Emma  | watson | Female | 6   | Red Tea    | Selenium IDE         | Asia      | Wait Commands |
