var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grocery Shopping' });
});

router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register Here' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/browse', function(req, res, next) {
  res.render('index', { title: 'Groceries' });
});

module.exports = router;
