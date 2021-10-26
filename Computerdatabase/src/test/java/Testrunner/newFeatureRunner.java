package Testrunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

	@RunWith(Cucumber.class)
	@CucumberOptions(
		
			features = "D:\\PRATYUSHA\\workspace\\Computerdatabase\\src\\test\\java\\Feature" 
			,tags= {"@Addnewcomputer"}
			,glue={"Stepdefinition"}
			,format= {"pretty","html:test-outout"}
			,dryRun= false
					
			)

	public class newFeatureRunner {

	}
