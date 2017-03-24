var express = require('express');
var router = express.Router();

var Weather = require('../db');


var apiRouter = function (io) {
    router.get('/update', function (req, res) {
        var newweather = Weather({
            name:'土壤湿度',
            value:'14',
            time:Date()
        })

        newweather.save(function (err, result) {
            if(err) res.send(err);

            // res.send(result);
            Weather.find({},  function (err,data) {
                if(err) {
                    res.send(err);
                }

                res.json(data);
                io.sockets.emit('message',data);
                io.sockets.on('message',function (data) {
                    console.log(data);
                });

            }).sort({'time':1});
        })
    });

    return router;
}

// socket.emit('news',{hello: 'world'});


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});



router.post('/update', function (req, res, next) {
    var newweather = Weather({
        name: req.body.name,
        value: req.body.value,
        time: new Date()
    });

    newweather.save(function (err, result) {
        if(err) res.send(err);

        res.send(result);
    })

})

router.get('/all',function (req, res) {
    Weather.find({},  function (err,data) {
        if(err) {
            res.send(err);
        }

        res.json(data);


    }).sort({'time':1});
});
module.exports = apiRouter;
