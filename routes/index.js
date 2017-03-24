var express = require('express');
var router = express.Router();



var indexRouter = function (io) {
    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
        // io.sockets.emit('notify',{data:100});
        // res.json({ message: 'hooray! welcome to our api!' });
    });

    return router;
}

module.exports = indexRouter;
