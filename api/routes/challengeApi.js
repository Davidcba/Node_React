var express = require('express');
var router = express.Router();



router.get('/', function (req,res,next){

    res.status(200)
        .send({backend: 'Backend is Working'});

});
router.post('/', function (req,res,next){

    res.status(200)
        .send(    ` This is what you sent : ${req.body.post}`);
});

module.exports = router;