var express = require('express');
var router = express.Router();

router.get('/data', function(req, res) {
  console.log('111');
});

module.exports = router;
