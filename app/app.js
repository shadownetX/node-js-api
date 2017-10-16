const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello Express');
});

console.log('NodeJS Is Running');

app.listen(3000);

module.exports = app;