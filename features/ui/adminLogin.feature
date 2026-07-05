Feature: Admin Login

  As an admin
  I want the system to only allow authenticated admin users to log in
  So that the system remains safe and secure from unauthorised users

  Scenario: Invalid admin user cannot login
    Given I am on the admin login page
    When I login with invalid admin credentials
    Then I should see a login error message