@homepage @test1
Feature: The internet website homepage

  Scenario Outline: As a user, I can open homepage

    Given I open the browser and load the url <homepageurl>
    Then I should see header message with text <headertext> 

    Examples:
      | homepageurl                          | headertext             | 
      | https://the-internet.herokuapp.com/  | Welcome to the-internet| 
      