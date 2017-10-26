module.exports = function(app) {
    var articleController = require('../controllers/ArticleController');

    app.route('/articles')
        .get(articleController.list_all_articles);
};