$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Homepage.feature");
formatter.feature({
  "line": 3,
  "name": "Add new computer functionality",
  "description": "",
  "id": "add-new-computer-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Addnewcomputer"
    }
  ]
});
formatter.background({
  "line": 6,
  "name": "Clicking on add new computer button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "user should be able to view add new computer button",
  "description": "",
  "id": "add-new-computer-functionality;user-should-be-able-to-view-add-new-computer-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "The user goes to url \"http://computer-database.herokuapp.com/computers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The add new computer button should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on add new computer button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should navigate to Add a computer form",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://computer-database.herokuapp.com/computers",
      "offset": 22
    }
  ],
  "location": "Homepage.the_user_goes_to_url(String)"
});
formatter.result({
  "duration": 3272881400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.the_add_new_computer_button_should_be_visible()"
});
formatter.result({
  "duration": 121108800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_clicks_on_add_new_computer_button()"
});
formatter.result({
  "duration": 276329500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_should_navigate_to_Add_a_computer_form()"
});
formatter.result({
  "duration": 137853100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Clicking on add new computer button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "number of fields present",
  "description": "",
  "id": "add-new-computer-functionality;number-of-fields-present",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is on \"http://computer-database.herokuapp.com/computers/new\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user should able to view three text boxes",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "one dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "two buttons",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://computer-database.herokuapp.com/computers/new",
      "offset": 12
    }
  ],
  "location": "Homepage.user_is_on(String)"
});
formatter.result({
  "duration": 2140289700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_should_able_to_view_three_text_boxes()"
});
formatter.result({
  "duration": 135226000,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.one_dropdown()"
});
formatter.result({
  "duration": 49135600,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.two_buttons()"
});
formatter.result({
  "duration": 255753200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Clicking on add new computer button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "User enters valid data",
  "description": "",
  "id": "add-new-computer-functionality;user-enters-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user is on Add a computer form",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enter free text in Company name",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "enters Introduced date in yyyy-mm-dd fomat",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "selects company from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "clicks on add this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the user should be redirected to Homepage with a successfull message",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_Add_a_computer_form()"
});
formatter.result({
  "duration": 2312909300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_enter_free_text_in_Company_name()"
});
formatter.result({
  "duration": 152537800,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.enters_Introduced_date_in_yyyy_mm_dd_fomat()"
});
formatter.result({
  "duration": 118804500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.selects_company_from_dropdown()"
});
formatter.result({
  "duration": 187107400,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.clicks_on_add_this_computer_button1()"
});
formatter.result({
  "duration": 349655900,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.the_user_should_be_redirected_to_Homepage_with_a_successfull_message()"
});
formatter.result({
  "duration": 5767400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Clicking on add new computer button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 27,
  "name": "user leaves all fields null",
  "description": "",
  "id": "add-new-computer-functionality;user-leaves-all-fields-null",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user is on Add a computer form",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "clicks on add this computer button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user should be on same page",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_Add_a_computer_form()"
});
formatter.result({
  "duration": 2492729500,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.clicks_on_add_this_computer_button1()"
});
formatter.result({
  "duration": 249851300,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.the_user_should_be_on_same_page()"
});
formatter.result({
  "duration": 6376500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Clicking on add new computer button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 32,
  "name": "Checking Cancel button functionality",
  "description": "",
  "id": "add-new-computer-functionality;checking-cancel-button-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "user is on add a computer form",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user clicks on cancel button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user should be redirected to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_is_on_add_a_computer_form()"
});
formatter.result({
  "duration": 2062461100,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_clicks_on_cancel_button()"
});
formatter.result({
  "duration": 272374700,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_should_be_redirected_to_homepage()"
});
formatter.result({
  "duration": 174791700,
  "status": "passed"
});
});