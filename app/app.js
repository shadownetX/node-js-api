var express = require('express'),
    router = express.Router(),
    app = express(),
    morgan = require('morgan'),
    dotenv = require('dotenv'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Article = require('./models/ArticleModel');

require('dotenv').config();

var mongooseOptions = {
    useMongoClient: true
};

mongoose.Promise = require('bluebird');
var promiseMongoConnect = mongoose.connect('mongodb://' + process.env.MONGODB_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGODB_DATABASE, mongooseOptions);

promiseMongoConnect.catch(function () {
    var errorMessage = 'Unable to connect to MongoDB on ' + process.env.MONGODB_HOST + ':' + process.env.MONGO_PORT;
    console.error(errorMessage);
    throw new Error(errorMessage)
});

app.use('/api/v1', router);
router.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json);

var routesArticles = require('./routes/ArticleRoutes');
router.use(routesArticles());

app.listen(3000);
console.log('App server started on: ' + port);
