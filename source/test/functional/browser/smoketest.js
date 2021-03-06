'use strict';


const WAIT = 1000;
const NODE_PORT = process.env.NODE_PORT || 3000;


module.exports = {
  'Smoketest' (browser) {
    browser
      .url(`http://localhost:${NODE_PORT}/test-data`)
      .waitForElementVisible('body', WAIT)
      .assert.containsText('body', 'Books')
      .end();
  }
};
