# GForces
The below information explains the approach taken to create the automation script for 5 user journeys of computerdatabase application
# Environment setup

Step 1: In the Eclipse IDE, create a new Maven project <br />
Step 2: Add essential Selenium, Cucumber, Selenium, JUnit & Java dependencies in pom.xml <br />
Step 3: Create a folder under project with name 'drivers' <br />
Step 4: Drag and Drop chrome.exe file from local machine into drivers folder <br />
Step 5: Add chrome driver.exe file into project folder 

# Coding/Build
Step 1: Create feature file under src/test/java using name Homepage.feature <br />
Step 2: Create step definition file under stepdefinition folder with the name Homepage.java <br />
Step 3: Create a runner file which contains the location of stepdefinition and feature file with the name newfeaturerunner.java <br />
Step 4: Identify 5 user journeys <br />
Step 5: List down all the test cases in Gherkins language in feature file <br />
Step 6: Write the test execution logic/scripts for each test case in step definition file <br />
Step 7: Push the repo to Github
