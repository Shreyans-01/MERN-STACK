var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pride Month', employees: [{name: 'Gay Spongebob', post: 'Cook', salary : '50000'}, {name: 'Patrick', post: 'Waiter', salary : '100000'}, {name: 'Squidward', post: 'Manager', salary : '50000'}] });
});

module.exports = router;