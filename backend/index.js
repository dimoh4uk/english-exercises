const express = require('express');

const APP = express();


APP.get('/', function (req, res) {
    res.send({
        "name": "test user",
        "age": "30"
    });
});
APP.get('/users', function (req, res) {
    const user = {
        "name": "test user123131",
        "age": "311"
    };
    res.send([user, user, user]);
});

APP.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

console.log("loh log+>1");
