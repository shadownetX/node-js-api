var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

console.log('App server started on: ' + port);

app.listen(3000);
