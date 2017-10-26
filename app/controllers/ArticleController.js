var mongoose = require('mongoose'),
    Article = mongoose.model('Articles');

exports.list_all_articles = function(req, res) {
    Article.find({}, function(err, article) {
        if (err)
            res.send(err);
        res.json(article);
    });
};