package Stepdefinition;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Homepage {
   WebDriver driver;
	
	@Given("^The user goes to url \"([^\"]*)\"$")
	public void the_user_goes_to_url(String arg1) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\PRATYUSHA\\workspace\\Computerdatabase\\Chromedriver\\chromedriver.exe");
		
		 driver = new ChromeDriver();
		driver.get("http://computer-database.herokuapp.com/computers");
	}

	@Then("^The add new computer button should be visible$")
	public void the_add_new_computer_button_should_be_visible()  {
		  
			driver.findElement(By.id("add")).isDisplayed();
	}

	@Then("^User clicks on add new computer button$")
	public void user_clicks_on_add_new_computer_button() throws Throwable {
		driver.findElement(By.id("add")).click();
	    
	}

	@Then("^user should navigate to Add a computer form$")
	public void user_should_navigate_to_Add_a_computer_form() throws Throwable {
		System.out.println(driver.getCurrentUrl());
	    driver.close();
	}

	@Given("^user is on \"([^\"]*)\"$")
	public void user_is_on(String arg1) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\PRATYUSHA\\workspace\\Computerdatabase\\Chromedriver\\chromedriver.exe");
		
		 driver = new ChromeDriver();
		driver.get("http://computer-database.herokuapp.com/computers/new");
	}

	@Then("^user should able to view three text boxes$")
	public void user_should_able_to_view_three_text_boxes() throws Throwable {
		driver.findElement(By.id("name")).isEnabled();
	    driver.findElement(By.id("introduced")).isEnabled();
	    driver.findElement(By.id("discontinued")).isEnabled();
	    
	    System.out.println("The three text boxes are Enabled");
	}

	@Then("^one dropdown$")
	public void one_dropdown() throws Throwable {
		driver.findElement(By.id("company")).isEnabled();
		System.out.println("The dropdown is present");
	}

	@Then("^two buttons$")
	public void two_buttons() throws Throwable {
		driver.findElement(By.cssSelector("input[type='submit']"));
		driver.findElement(By.cssSelector("a[class='btn']"));
		System.out.println("The two buttons are present");
		driver.close();
	}

	@Given("^user is on Add a computer form$")
	public void user_is_on_Add_a_computer_form() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\PRATYUSHA\\workspace\\Computerdatabase\\Chromedriver\\chromedriver.exe");
		
		 driver = new ChromeDriver();
		driver.get("http://computer-database.herokuapp.com/computers/new");
	}

	

	@When("^user enter free text in Company name$")
	public void user_enter_free_text_in_Company_name() throws Throwable {
		driver.findElement(By.id("name")).sendKeys("ABCDE");
	}

	@When("^enters Introduced date in yyyy-mm-dd fomat$")
	public void enters_Introduced_date_in_yyyy_mm_dd_fomat() throws Throwable {
		driver.findElement(By.id("introduced")).sendKeys("2015-01-01");
	}

	@When("^selects company from dropdown$")
	public void selects_company_from_dropdown() throws Throwable {
		WebElement staticDropdown = driver.findElement(By.id("company"));
	     Select dropdown= new Select (staticDropdown);
	     dropdown.selectByIndex(2);
	}

	@When("^clicks on add this computer button$")
	public void clicks_on_add_this_computer_button1() throws Throwable {
		driver.findElement(By.cssSelector("input[type='submit']")).click();
	}

	@Then("^the user should be redirected to Homepage with a successfull message$")
	public void the_user_should_be_redirected_to_Homepage_with_a_successfull_message() throws Throwable {
		String homepage= driver.getCurrentUrl();
		 
		   System.out.println(homepage);
		   //Assert.assertEquals("http://computer-database.herokuapp.com/computers", homepage);
		   driver.quit();
	}

	
	@Then("^the user should be on same page$")
	public void the_user_should_be_on_same_page() throws Throwable {
		System.out.println(driver.getTitle());
		
	}

	@Given("^user gives null in Computer name field$")
	public void user_gives_null_in_Computer_name_field() throws Throwable {
		driver.findElement(By.id("name")).sendKeys("");
	}

	@When("^user enters date in other format$")
	public void user_enters_date_in_other_format() throws Throwable {
	    driver.findElement(By.id("introduced")).sendKeys("ggfg");
	}

	@When("^clicks on Add this computer button$")
	public void clicks_on_Add_this_computer_button() throws Throwable {
		driver.findElement(By.cssSelector("input[type='submit']")).click();
	}

	@Then("^user should stay on the current$")
	public void user_should_stay_on_the_current() throws Throwable {
		System.out.println(driver.getTitle());
		
	}

@Given("^user is on add a computer form$")
public void user_is_on_add_a_computer_form() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "D:\\PRATYUSHA\\workspace\\Computerdatabase\\Chromedriver\\chromedriver.exe");
	
	 driver = new ChromeDriver();
	driver.get("http://computer-database.herokuapp.com/computers/new");
}

@When("^user clicks on cancel button$")
public void user_clicks_on_cancel_button() throws Throwable {
	//driver.findElement(By.partialLinkText("computers")).click();
	driver.findElement(By.cssSelector("a[class='btn']")).click();
}

	@Then("^user should be redirected to homepage$")
	public void user_should_be_redirected_to_homepage() throws Throwable {
	   String homeurl= driver.getCurrentUrl();
	    driver.close();
	}


	
}	