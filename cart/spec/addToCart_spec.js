var addToCartPage = require('./../pageobject/addToCart_pageobject.js');
/*
Function to verify add to cart functionlity of amazon
steps:
1.Naviagte to amazon.com
2.Search shoes category
3.select any shoes
4.select size of shoes 
5.click on add to cart buton
6.verify added item in cart
*/

describe('Verify add to cart functionality of amazon', function () {
  var addToCartObject = new addToCartPage();
  var baseURL = "https://www.amazon.com/";

  it('should search shoes category', function () {
    //Non-angular website 
    browser.waitForAngularEnabled(false);
    browser.get(baseURL);
    var currentUrl = browser.getCurrentUrl()
    expect(currentUrl).toBe(baseURL);
    addToCartObject.enterShoeValue('shoes');

  });

  it('Should redirect to cart page', function () {
    addToCartObject.tapOnShoesLink();
  });

  it('Item should be add in cart', function () {
    addToCartObject.tapOnSelectSizeDropdown();
    addToCartObject.tapOnAddToCartButton();
  });
}); 