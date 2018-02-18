const express = require('express');
var sequelize = require('../providers/sql');
var router = express.Router();

// /users/
router.get('/', function (req, res, next) {

});

router.get('/:id', function (req, res, next) {
  
});

router.post('/:id/groups', function (req, res, next) {
  
});

router.post('/:id/scopes', function (req, res, next) {
  
});

router.put('/:id/groups', function (req, res, next) {
  
});

router.put('/:id/scopes', function (req, res, next) {
  
});


module.exports = router;