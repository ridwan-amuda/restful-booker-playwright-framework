Feature: Availability Checker

  As a new booking user
  I want to see which rooms are available for the dates I select
  So that I can book suitable rooms quickly

  Scenario: Availability Checker is displayed on the landing page
    Given I am on the B&B homepage
    Then I should see the Availability Checker

  Scenario: User can search available rooms with valid dates
    Given I am on the B&B homepage
    When I search for rooms using valid dates
    Then I should see available rooms for booking