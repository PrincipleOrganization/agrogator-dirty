'use strict';

const Express = require('../express/index.js');

class Application {
  constructor() {
    this.express = Express;
    this.port = 3000;
  }
}

exports = module.exports = Application;
