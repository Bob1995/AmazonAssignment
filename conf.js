exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./cart/spec/addToCart_spec.js'],
  directConnect: true,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  },

  onPrepare: function () {
    browser.driver.manage().window().maximize()
  },


};