
@Addnewcomputer
Feature: Add new computer functionality


Background: Clicking on add new computer button
  Scenario: user should be able to view add new computer button
    Given The user goes to url "http://computer-database.herokuapp.com/computers"
    Then The add new computer button should be visible 
    And User clicks on add new computer button
    Then user should navigate to Add a computer form

   Scenario: number of fields present
    Given user is on "http://computer-database.herokuapp.com/computers/new"
    Then user should able to view three text boxes
    And one dropdown 
    And two buttons
  
  Scenario: User enters valid data
  Given user is on Add a computer form 
  When user enter free text in Company name
  And enters Introduced date in yyyy-mm-dd fomat
  And selects company from dropdown
  And clicks on add this computer button
  Then the user should be redirected to Homepage with a successfull message
  	
 Scenario: user leaves all fields null
 Given user is on Add a computer form 
  And clicks on add this computer button
  Then the user should be on same page

   Scenario: Checking Cancel button functionality
   Given user is on add a computer form
   When user clicks on cancel button
  Then user should be redirected to homepage