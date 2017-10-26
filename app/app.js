var express = require('express'),
    router = express.Router(),
    app = express(),
    morgan = require('morgan'),
    port = process.env.PORT || 3000;

console.log('App server started on: ' + port);

app.listen(3000);

app.use('/api/v1', router);

app.use(morgan('dev'));
