var express = require('express');
var router = express.Router();

/* GET chat listing. */
router.get('/', function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    console.log(req.protocol);
    console.log(req.get('host') + req.originalUrl);
    console.log(req.originalUrl);
    
    res.render('chat', {l_url : req.protocol+"://"+req.get('host')});
});



module.exports = router;
