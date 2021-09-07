var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('is this running');
    let d = [];
    for (let i = 0; i < 10; ++i) {
        d.push(i);
    }
    res.render('main', { cards: d });
});

module.exports = router;
