var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    port = process.env.PORT || 3000;

console.log('App server started on: ' + port);

app.listen(3000);

app.use(morgan('dev'));
