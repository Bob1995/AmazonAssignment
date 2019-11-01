/*
Pageobject for add cart spec
*/
var addToCartObject = function () {
  
  this.searchTextBox = element(by.id('twotabsearchtextbox'));
  this.goButtonClick = $('[value="Go"]');

  
  this.selectAnyShoesLink = $('#pdagDesktopSparkleAsinContainer1 .price__jumboIntegerAmount ');

  this.selectDropDownTip = $('#dropdown_selected_size_name');
  this.selectSizeTip = $('#size_name_2');

  this.addToCartSubmitButton = element(by.id('submit.add-to-cart'));
  this.cartButton = element(by.id('nav-cart'));

  this.shoeTitle = element(by.css('.sc-list-item-content ul li:nth-child(1)'));

  /*
  function to search shoe category and click on go button
  */
  this.enterShoeValue = function (shoeValue) {
    this.searchTextBox.sendKeys(shoeValue);
    this.goButtonClick.click();
    browser.sleep(2000);
  }

  /*
  function to click on any shoes link
  */
  this.tapOnShoesLink = function () {
    var EC = protractor.ExpectedConditions;
    var selectAnyShoes = this.selectAnyShoesLink;
    var shoesLink = EC.elementToBeClickable(selectAnyShoes);
    browser.wait(shoesLink, 5000);
    selectAnyShoes.click();
    browser.sleep(2000);

  }

  /*
  function to select size of shoes
  */
  this.tapOnSelectSizeDropdown = function () {
    this.selectDropDownTip.click();
    browser.sleep(7000);
    this.selectSizeTip.click();
    browser.sleep(3000);

  }


  /*
  Function to click on add to cart button
  */
  this.tapOnAddToCartButton = function () {
    var EC = protractor.ExpectedConditions;
    var addToCartButton = this.addToCartSubmitButton;
    var isClickable = EC.elementToBeClickable(addToCartButton);
    browser.wait(isClickable, 10000);
    addToCartButton.click();
    this.cartButton.click();
    browser.sleep(5000);

    expect(this.shoeTitle.isDisplayed()).toBe(true);
  }

}

module.exports = addToCartObject




