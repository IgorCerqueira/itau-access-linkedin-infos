Feature: Access information about Itaú on Linkedin

    Feature This feature is necessary to ensure that a regular user can see the 'About' Us information.

    Background: 
        Given A common user goes to the google page
        When He search for "Itaú Linkedin"
        And The search result is selected

    Scenario: Success Search
        Then It will be possible to view information about Itaú

    Scenario: Searchs stop in Linkedin AuthWall
        Then The linkedin AuthWall is displayed
