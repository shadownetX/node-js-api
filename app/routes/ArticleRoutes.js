module.exports = function(){
    var articleController = require('../controllers/ArticleController'),
    router = require('express').Router();

    router.get('/articles', articleController.list_all_articles);

    return router;
};

